package com.ksgbabu.portal;

import com.ksgbabu.portal.model.Portal;
import org.junit.Test;

import java.util.List;

public class PortalDaoTest{

  PortalDao dao = new PortalDao();

  @Test
  public void testSave(){
    Portal portal = new Portal();
    portal.setPortalName("complex-portal");
    dao.save(portal);
  }

  @Test
  public void testListAll(){
    List<Portal> list = dao.listAll();
    for(Portal portal: list){
      System.out.println("Portal id:"+portal.getPortalId()+", Portal Name:"+ portal.getPortalName());
    }
  }

  @Test
  public void testDelete(){
    Portal portal = new Portal();
    portal.setPortalName("myportal");
    portal.setPortalId("556f4945d4c69dbeb3398bcc");
    dao.delete(portal);
  }
}
