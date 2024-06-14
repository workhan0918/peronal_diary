package com.tw.diary.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.Date;

@Data
public class Diary {
    @JsonProperty
    private int dId;
    @JsonProperty
    private int uId;
    @JsonProperty
    private String title;
    @JsonProperty
    private String content;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createDate;
    @JsonProperty
    private String weather;
}
