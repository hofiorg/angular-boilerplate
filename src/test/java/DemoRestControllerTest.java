import org.hofi.Application;
import org.hofi.DemoService;
import org.hofi.model.Demo;
import org.hofi.model.DemoFilter;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.reactive.server.WebTestClient;
import reactor.core.publisher.Mono;

import java.time.Instant;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class DemoRestControllerTest {

  @Autowired
  private WebTestClient webTestClient;

  @MockBean
  private DemoService demoService;

  @Test
  public void testSearchDemos_Success() {
    DemoFilter demoFilter = new DemoFilter(
      Instant.parse("2024-01-01T00:00:00Z"),
      Instant.parse("2024-12-31T23:59:59Z"),
      "", "", "", "");

    List<Demo> result = List.of(new Demo("Name", "Gender", "Company"));

    when(demoService.search(any(DemoFilter.class))).thenReturn(result);

    webTestClient.post()
      .uri("/api/demo/search")
      .body(Mono.just(demoFilter), DemoFilter.class)
      .exchange()
      .expectStatus().isOk()
      .expectBody()
      .json("""
                  [{"name":"Name","gender":"Gender","company":"Company"}]""");

    Mockito.verify(demoService, times(1)).search(any(DemoFilter.class));
  }

  @Test
  public void testSearchDemos_BadRequest_EingangVon_Null() {
    DemoFilter demoFilter = new DemoFilter(null, null, "", "", "", "");

    webTestClient.post()
      .uri("/api/demo/search")
      .body(Mono.just(demoFilter), DemoFilter.class)
      .exchange()
      .expectStatus().isBadRequest();
  }

  @Test
  public void testSearchDemos_BadRequest_System_Length31() {
    DemoFilter demoFilter = new DemoFilter(Instant.now(), Instant.now(), "0123456789012345678901234567891", "", "", "");

    webTestClient.post()
      .uri("/api/demo/search")
      .body(Mono.just(demoFilter), DemoFilter.class)
      .exchange()
      .expectStatus().isBadRequest();
  }
}
