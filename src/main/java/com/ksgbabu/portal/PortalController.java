package com.ksgbabu.portal;


import com.ksgbabu.portal.model.Portal;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/")
@Scope("singleton")
public class PortalController {

  PortalDao dao = new PortalDao();

  @RequestMapping(value = "/portals",produces = "application/json",method = RequestMethod.GET)
  public List<Portal> listPortals() {

    return dao.listAll();

  }


}
