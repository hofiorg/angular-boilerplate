package org.hofi;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hofi.model.DemoFilter;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/demo")
@Slf4j
@AllArgsConstructor
public class DemoRestController {
  private final DemoService demoService;

  @RequestMapping(method = RequestMethod.POST, value = "/search", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<?> searchDemos(@Valid @RequestBody DemoFilter demoFilter) {
    log.info("searchDemos called with {}", demoFilter);

    return new ResponseEntity<>(demoService.search(demoFilter), HttpStatus.OK);
  }
}
