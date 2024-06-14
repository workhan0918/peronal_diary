package com.tw.diary.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.Date;

@Data
public class User {
    @JsonProperty
    private int uId;
    @JsonProperty
    private String userId;
    @JsonProperty
    private String userPw;
    @JsonProperty
    private String userNick;
    @JsonProperty
    private String email;
    @JsonProperty
    private String emailVerification;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createDate;
}
