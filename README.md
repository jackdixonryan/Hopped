# Hopped JSON

An easy to use json file providing vital information about brewer's hops choices. 

[View an example HTML application](https://jackdixonryan.github.io/Hopped/hops.html)

## JSON Call

If you want to use hops.json in your project, use the ES6 `fetch()` method.

```

      const url = 'https://jackdixonryan.github.io/Hopped/hops.JSON'
      
      fetch(url)
        .then(data => data.json())
        .then(result => return result);

```

Or load the jQuery library and get the json file with the `$.getJSON()` method.

## About

A JSON file accessible at 'https://jackdixonryan.github.io/Hopped/hops.json' with information for any home brewing enthusiast on the strains of the hops plant and each varietals properties.

#### Read the Documentation [here](https://github.com/jackdixonryan/Hopped/blob/master/docs.md).

### Project Goals

* Bring scattered information on hops varietals into a single easily-referenced data structure.
* Create the fundamentals for a single-stop resource on all home-brewing information. 

### In the future:

* Similar JSON files for yeast and grain.
* Three JSON files synchronizing in an application that allows a home brewer to locate and discover every ingredient they need to make the beer they want. 



