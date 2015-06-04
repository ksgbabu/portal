/*
 * Mosaic
 *
 * Copyright 2011 Corelogic Ltd All Rights Reserved.
 */
package com.ksgbabu.portal.repository;

import com.mongodb.MongoClient;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;

public class MongoConfig {

  @Bean
  public MongoDbFactory mongoDbFactory() throws Exception{
    return new SimpleMongoDbFactory(new MongoClient(),"portaldb");
  }

  @Bean
  public MongoTemplate mongoTemplate() throws Exception{
    MongoTemplate mongoTemplate = new MongoTemplate(mongoDbFactory());
    return mongoTemplate;
  }

}
