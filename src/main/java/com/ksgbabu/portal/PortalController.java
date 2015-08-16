package com.ksgbabu.portal;


import com.ksgbabu.portal.model.Portal;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/portal")
public class PortalController {

  @RequestMapping(value = "/list",produces = "application/json",method = RequestMethod.GET)
  public List listPortals() {
    ArrayList<Portal> portals = new ArrayList();
    Portal portal = new Portal();
    portal.setPortalId("1");
    portal.setPortalName("first");
    portals.add(portal);
    return portals;

  }


}
