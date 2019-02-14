/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
<<<<<<< master
import type { ReaderFragment } from 'relay-runtime';
type LocalTime$ref = any;
type LocationName$ref = any;
type Transporters$ref = any;
=======
import type { ConcreteFragment } from 'relay-runtime';
type TripSectorNative$ref = any;
type TripSectorWeb$ref = any;
>>>>>>> Refactor: TripSector web layout
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripSector$ref: FragmentReference;
export type TripSector = {|
  +$fragmentRefs: TripSectorNative$ref & TripSectorWeb$ref,
  +$refType: TripSector$ref,
|};
*/


<<<<<<< master
const node/*: ReaderFragment*/ = (function(){
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
=======
const node/*: ConcreteFragment*/ = {
>>>>>>> Refactor: TripSector web layout
  "kind": "Fragment",
  "name": "TripSector",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
<<<<<<< master
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
      "selections": (v0/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departureTime",
      "storageKey": null,
      "args": null,
      "concreteType": "DateType",
      "plural": false,
      "selections": (v0/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "destination",
      "storageKey": null,
      "args": null,
      "concreteType": "Location",
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "origin",
      "storageKey": null,
      "args": null,
      "concreteType": "Location",
      "plural": false,
      "selections": (v1/*: any*/)
=======
      "kind": "FragmentSpread",
      "name": "TripSectorNative",
      "args": null
>>>>>>> Refactor: TripSector web layout
    },
    {
      "kind": "FragmentSpread",
      "name": "TripSectorWeb",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '66a297645258405586102b515f9d34e2';
module.exports = node;
