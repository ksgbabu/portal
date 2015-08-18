package com.ksgbabu.portal.activity;

import com.ksgbabu.portal.model.ActivityType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/activity")
@Scope("singleton")
public class ActivityController {

  Logger logger = LoggerFactory.getLogger(ActivityController.class);
  ActivityDao dao = new ActivityDao();

  @RequestMapping(value = "/type",produces = "application/json", consumes = "application/json", method = RequestMethod.POST)
  public String createActivityTypes(@RequestBody ActivityType activityType){
    logger.debug("activityType name - {}",activityType.getName());
    dao.save(activityType);
    return "{success}";
  }

  @RequestMapping(value = "/types",produces = "application/json", method = RequestMethod.GET)
  public List<ActivityType> getActivityTypes(){

    return dao.listAll();

  }

}
