fst viz tool
============

small visualization tool built by the design team during Digital Methods Summer School 2019, Amsterdam.

## usage

we need a local server in order to open `index.html` and avoid nasty `CORS` errors.

to do that, open a terminal and type

```
python -m http.server
```

in the terminal output, you should see

```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

open your web browser and paste in

```
http://0.0.0.0:8000/
```

the visualization tool should be loading fine!

## setup

the dataset used by `d3` is set in `d3viz.js`, at line `11`:

```
d3.json("fst.json")
```

you can change the path to the file (`fst.json`), with another dataset.

each record in the `json` array *needs* to follow this structure:

```
{
  "b_title_statement_t": [
    "issues of gender, 'race', sexuality, disability and social class /"
  ],
  "a_title_statement_t": [
    "Education, equality and human rights :"
  ],
  "b_imprint_s": "Routledge,",
  "title_statement_t": [
    "Education, equality and human rights : issues of gender, 'race', sexuality, disability and social class / edited by Mike Cole."
  ],
  "keywords": "gender, social class, race"
},
```

you can of course change data structure by changing the `d3viz.js` script, eg by asking d3 to print other keys from the list of records in your dataset json file.

