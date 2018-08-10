# Hopped JSON

## Hopped jQuery Call

If you want to use the hops JSON as if it were an API in your project, you need only use the jQuery `getJSON` method as follows:

```

      const url = 'https://jackdixonryan.github.io/Hopped/hops.JSON'
      
      $.getJSON(url).done(function(data){
          console.log(data);

```

## About

A JSON file accessible at 'https://jackdixonryan.github.io/Hopped/hops.JSON' with information for any home brewing enthusiast on the strains of the hops plant and each varietals properties.

### Project Goals

* Bring scattered information on hops varietals into a single easily-referenced data structure.
* Create the fundamentals for a single-stop resource on all home-brewing information. 

### In the future:

* Similar JSON files for yeast and grain.
* Three JSON files synchronizing in an application that allows a home brewer to locate and discover every ingredient they need to make the beer they want. 



