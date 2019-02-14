/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type LocalTime$ref = any;
type LocationName$ref = any;
type Transporters$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripSectorNative$ref: FragmentReference;
export type TripSectorNative = {|
  +duration: ?number,
  +arrivalTime: ?{|
    +$fragmentRefs: LocalTime$ref
  |},
  +departureTime: ?{|
    +$fragmentRefs: LocalTime$ref
  |},
  +destination: ?{|
    +$fragmentRefs: LocationName$ref
  |},
  +origin: ?{|
    +$fragmentRefs: LocationName$ref
  |},
  +$fragmentRefs: Transporters$ref,
  +$refType: TripSectorNative$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "LocalTime",
    "args": null
  }
],
v1 = [
  {
    "kind": "FragmentSpread",
    "name": "LocationName",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "TripSectorNative",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "duration",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrivalTime",
      "storageKey": null,
      "args": null,
      "concreteType": "DateType",
      "plural": false,
      "selections": v0
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departureTime",
      "storageKey": null,
      "args": null,
      "concreteType": "DateType",
      "plural": false,
      "selections": v0
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "destination",
      "storageKey": null,
      "args": null,
      "concreteType": "Location",
      "plural": false,
      "selections": v1
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "origin",
      "storageKey": null,
      "args": null,
      "concreteType": "Location",
      "plural": false,
      "selections": v1
    },
    {
      "kind": "FragmentSpread",
      "name": "Transporters",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '459948fb65e1c72d08641071413294de';
module.exports = node;
