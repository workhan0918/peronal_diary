package com.tw.diary.Model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Files {
    @JsonProperty
    private int fId;
    @JsonProperty
    private int dId;
    @JsonProperty
    private String filePath;
    @JsonProperty
    private String fileType;
}
