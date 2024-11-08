import org.hofi.Application;
import org.hofi.DemoService;
import org.hofi.model.Demo;
import org.hofi.model.DemoFilter;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import static org.mockito.Mockito.*;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class DemoRestControllerTest {

  @Autowired
  private TestRestTemplate restTemplate;

  @MockBean
  private DemoService demoService;

  @Test
  public void testSearchDemos_Success() {
    DemoFilter demoFilter = new DemoFilter(Instant.now(), Instant.now(), "", "", "", "");

    List<Demo> result = new ArrayList<>();
    result.add(new Demo("Name", "Gender", "Company"));

    when(demoService.search(any())).thenReturn(result);

    HttpEntity<DemoFilter> requestEntity = new HttpEntity<>(demoFilter);
    ResponseEntity<String> responseEntity = restTemplate.exchange(
      "/api/demo/search",
      HttpMethod.POST,
      requestEntity,
      String.class
    );

    assertEquals(200, responseEntity.getStatusCode().value());
    assertEquals("""
    [{"name":"Name","gender":"Gender","company":"Company"}]""", responseEntity.getBody());

    verify(demoService, times(1)).search(any());
  }

  @Test
  public void testSearchDemos_BadRequest_EingangVon_Null() {
    DemoFilter demoFilter = new DemoFilter(null, null, "", "", "", "");
    HttpEntity<DemoFilter> requestEntity = new HttpEntity<>(demoFilter);

    ResponseEntity<String> responseEntity = restTemplate.exchange(
      "/api/demo/search",
      HttpMethod.POST,
      requestEntity,
      String.class
    );

    assertEquals(400, responseEntity.getStatusCode().value());
  }

  @Test
  public void testSearchDemos_BadRequest_System_Length31() {
    DemoFilter demoFilter = new DemoFilter(Instant.now(), Instant.now(), "0123456789012345678901234567891", "", "", "");
    HttpEntity<DemoFilter> requestEntity = new HttpEntity<>(demoFilter);

    ResponseEntity<String> responseEntity = restTemplate.exchange(
      "/api/demo/search",
      HttpMethod.POST,
      requestEntity,
      String.class
    );

    assertEquals(400, responseEntity.getStatusCode().value());
  }
}
