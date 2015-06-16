/*
 * Mosaic
 *
 * Copyright 2011 Corelogic Ltd All Rights Reserved.
 */
package com.ksgbabu.portal.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "portals")
public class Portal {

  @Id
  private String portalId;

  private String portalName;


  public String getPortalId() {
    return portalId;
  }

  public void setPortalId(String portalId) {
    this.portalId = portalId;
  }

  public String getPortalName() {
    return portalName;
  }

  public void setPortalName(String portalName) {
    this.portalName = portalName;
  }
}
