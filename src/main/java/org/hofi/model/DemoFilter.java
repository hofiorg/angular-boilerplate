package org.hofi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.OffsetDateTime;

@Getter
@AllArgsConstructor
@Setter
@ToString
public class DemoFilter {
  private OffsetDateTime eingangVon;
  private OffsetDateTime eingangBis;
  private String system;
  private String nachrichtentyp;
  private String nummer1;
  private String nummer2;
}
