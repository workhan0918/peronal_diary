package com.tw.diary.Mapper;

import com.tw.diary.Model.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    List<User> getAllUsers();
}
