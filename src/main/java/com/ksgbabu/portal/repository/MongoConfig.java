/*
 * Portal
 *
 * Copyright 2011 Innoventlabs Ltd All Rights Reserved.
 */
package com.ksgbabu.portal.repository;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientOptions;
import com.mongodb.ServerAddress;
import com.mongodb.WriteConcern;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;

public class MongoConfig {

  @Bean
  public MongoDbFactory mongoDbFactory() throws Exception{

    MongoClientOptions options = MongoClientOptions.builder().connectionsPerHost(10)
      .threadsAllowedToBlockForConnectionMultiplier(4)
      .connectTimeout(1000)
      .maxWaitTime(1500)
      .socketKeepAlive(true)
      .socketTimeout(1500)
      .writeConcern(new WriteConcern().withFsync(true)).build();

    MongoClient client = new MongoClient(new ServerAddress("localhost",27017),options);
    return new SimpleMongoDbFactory(client,"portaldb");
  }

  @Bean
  public MongoTemplate mongoTemplate() throws Exception{
    MongoTemplate mongoTemplate = new MongoTemplate(mongoDbFactory());
    return mongoTemplate;
  }

}
