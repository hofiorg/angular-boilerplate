package org.hofi;

import lombok.extern.slf4j.Slf4j;
import org.hofi.model.Demo;
import org.hofi.model.DemoFilter;
import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class DemoService {

    public List<Demo> search(DemoFilter demoFilter) {
      log.info("Zeitzone Europe/Berlin Instant: {}", demoFilter.getEingangBis().atZone(ZoneId.of("Europe/Berlin")));
      log.info("Zeitzone Europe/Berlin Instant: {}", demoFilter.getEingangBis().atZone(ZoneId.of("Europe/Berlin")).format(DateTimeFormatter.ofLocalizedDateTime(FormatStyle.SHORT)));
      log.info("Zeitzone Europe/Berlin Instant: {}", demoFilter.getEingangBis().atZone(ZoneId.of("Europe/Berlin")).format(DateTimeFormatter.ofLocalizedDateTime(FormatStyle.LONG)));
      log.info("Zeitzone UTC:                   {}", demoFilter.getEingangBis().atZone(ZoneId.of("UTC")));

      List<Demo> result = new ArrayList<>();
      for(int i = 0; i < 1000; ++i) {
        result.add(new Demo("Name %d".formatted(i), "Gender %d".formatted(i), "Company %d".formatted(i)));
      }
      return result;
    }
}
