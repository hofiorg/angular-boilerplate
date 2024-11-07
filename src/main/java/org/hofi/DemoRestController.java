package org.hofi;

import lombok.extern.slf4j.Slf4j;
import org.hofi.model.Demo;
import org.hofi.model.DemoFilter;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/demo")
@Slf4j
public class DemoRestController {

  @RequestMapping(method = RequestMethod.POST, value = "/search", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<?> searchDemos(@RequestBody DemoFilter demoFilter) {
    log.info("searchDemos called with {}", demoFilter);

    log.info("Zeitzone Europe/Berlin: {}", demoFilter.getEingangBis().atZoneSameInstant(ZoneId.of("Europe/Berlin")));
    log.info("Zeitzone UTC:           {}", demoFilter.getEingangBis().atZoneSameInstant(ZoneId.of("UTC")));

    List<Demo> result = new ArrayList<>();
    for(int i = 0; i < 1000; ++i) {
      result.add(new Demo("Name %d".formatted(i), "Gender %d".formatted(i), "Company %d".formatted(i)));
    }
    return new ResponseEntity<>(result, HttpStatus.OK);
  }
}
