package com.ksgbabu.portal.activity;

import com.ksgbabu.portal.model.ActivityType;
import com.ksgbabu.portal.repository.BaseDao;

import java.util.List;

public class ActivityDao extends BaseDao {

  public void save(ActivityType activityType){
    mongoOperation().save(activityType);
  }

  public List<ActivityType> listAll(){
     return mongoOperation().findAll(ActivityType.class);
  }
}
