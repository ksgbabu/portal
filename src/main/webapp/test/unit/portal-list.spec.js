/**
 * Created by gireesh.babu on 19/08/15.
 */

import {PortalList} from '../../src/portal-list/portal-list';

describe('the App module', () => {

  var portalList;

  beforeEach(() => {
    portalList = new PortalList();
  });

  it('contains a router property', () => {
    expect(portalList.heading).toBeDefined();
  });
});
