/*
 * Portal
 *
 * Copyright 2015 Innoventlabs Ltd All Rights Reserved.
 */
package com.ksgbabu.portal.repository;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.data.mongodb.core.MongoOperations;

public class BaseDao {

  ApplicationContext context = new AnnotationConfigApplicationContext(MongoConfig.class);
  MongoOperations operations = (MongoOperations) context.getBean("mongoTemplate");

  public MongoOperations mongoOperation(){

    return operations;

  }

}
