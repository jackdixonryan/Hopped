# Documentation

I recognize that this isn't an API but just a basic JSON, however, I'd like to remember the call syntax and have somewhere where it's all written down.

## Basic Path

From the JSON file, every hop is a unique index in the JSON's search array, so `const basic path = json.search[index];` 
will return all data associated with the hops varietal located at that index.

### String and Array Properties of the Hops Object
* `name` : the name of the varietal
* `brand` : the name of the varietal's producer (where applicable)
* `location` :
  * `country` : the most important location stat giving the varietal's country of origin.
  * `state` : where applicable, gives the state of origin.
  * `locale` : this is more nebulous; where applicable, supplies a geolocation such as a landmark, geograpical area, town, or county associated with the hops varietal.
* `uses`: returns an array of the hops uses. 
  * If a hops varietal is principally for bittering but also aroma, then bittering will appear as the first item in the arry, and aroma as the second.
* `flavors`: returns an array of the hops flavors.
  * As with uses, the array is sorted by prominence.
* `beers` : returns an array of beers the hop is used in--sorted in no particular order.

At some point, a decision will be made as to whether flavors should be restricted to a limited array of values while the more
specific beer flavors (grapefruit, green tea, etc.) might be moved to a different call, to give users access to a more basic palette of 
general flavor groups (Earthy, Citrus, Tropical, etc.)

### Float Properties of the Hops Object

Alpha and Beta acid contents are most commonly represented as percentages, but here they are displayed as floats.
So, a hops varietal with a maximum alpha acid of 5% will be stored as 0.05 in the JSON file.

* `alpha` : the alpha acid content of the hop. 
  * `alpha.min` returns the minimum content of the alpha acid as a float
  * `alpha.max` returns the maximum content of alpha acid as a float
* `beta` : the beta acid content of the hop. 
  * `beta.min` returns the minimum content of the beta acid as a float
  * `beta.max` returns the maximum content of beta acid as a float
  
The oil content of the hops is represented as mls/100 g.

* `oils` : the oil content of the hop. 
  * `oils.min` returns the minimum content of the oils as a float
  * `oils.max` returns the maximum content of the oils as a float
