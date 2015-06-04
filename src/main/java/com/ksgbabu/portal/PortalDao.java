package com.ksgbabu.portal;

import java.util.List;

import com.ksgbabu.portal.model.Portal;
import com.ksgbabu.portal.repository.BaseDao;

public class PortalDao extends BaseDao {

  public void PortalDao(){

  }

  public void save(Portal portal){
    mongoOperation().save(portal);
  }

  public List listAll(){
    return mongoOperation().findAll(Portal.class);
  }

  public void delete(Portal portal){
    mongoOperation().remove(portal);
  }
}
