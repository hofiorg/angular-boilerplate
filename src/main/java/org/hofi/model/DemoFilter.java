package org.hofi.model;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.validator.constraints.Length;

import java.time.Instant;

@Getter
@AllArgsConstructor
@Setter
@ToString
public class DemoFilter {
  @NotNull
  private Instant eingangVon;
  @NotNull
  private Instant eingangBis;
  @Length(max = 30)
  private String system;
  @Length(max = 30)
  private String nachrichtentyp;
  @Length(max = 20)
  private String nummer1;
  @Length(max = 20)
  private String nummer2;
}
