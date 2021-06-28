  
//Use the D3 library to read in `samples.json`.  
function metaData(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      console.log(metadata);

// Filter the data for the ID
var buildingArray = metadata.filter(sampleObj => sampleObj.id == sample);
var result = buildingArray[0];
// Use d3 to select the required panel
var panelData = d3.select("#sample-metadata");

// Clear the existing data in the html
panelData.html("");

// Use `Object.entries` to add each key and value pair to the panelData
Object.entries(result).forEach(([key, value]) => {
  panelData.append("h6").text(`${key.toUpperCase()}: ${value}`);
});
});
}
//Display the sample metadata, i.e., an individual's demographic information.
//Create a horizontal bar chart with a dropdown menu to display the top 10 
//OTUs found in that individual.
//Use `sample_values` as the values for the bar chart.
//Use `otu_ids` as the labels for the bar chart.
//Use `otu_labels` as the hovertext for the chart.

function buildPlots(sample) {
    d3.json("samples.json").then((data) => {
      var sampleData = data.samples;
      var buildingArray = sampleData.filter(sampleObj => sampleObj.id == sample);
      var result = buildingArray[0];
  
      var otu_ids = result.otu_ids;
      var otu_labels = result.otu_labels;
      var sample_values = result.sample_values;


      var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
      var trace1 = [
        {
          y: yticks,
          x: sample_values.slice(0, 10).reverse(),
          text: otu_labels.slice(0, 10).reverse(),
          type: "bar",
          orientation: "h",
        }
      ];

      var layout = {
        title: "Top 10 Bacteria Cultures",
        margin: { t: 30, l: 150 }
      };
  
      Plotly.newPlot("bar", trace1, layout);
    //Create a bubble chart that displays each sample.
//Use `otu_ids` for the x values.
//Use `sample_values` for the y values.
//Use `sample_values` for the marker size.
//Use `otu_ids` for the marker colors.
//Use `otu_labels` for the text values.


var layout = {
    title: "Bacteria Cultures Per Sample",
    hovermode: "closest", 
    xaxis: { title: "OTU ID" },
  }; 
  var  trace1= [
    {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Earth"
      }
    }
  ];
  Plotly.newPlot("bubble", trace1, layout);
    });
  };

  function init() {
    // Grab a reference to the dropdown select element
    var selectDropdown = d3.select("#selDataset");
  
    // Populate the select options by using the list of sample names
    d3.json("samples.json").then((data) => {
      var name = data.names;
    
      name.forEach((sample) => {
        selectDropdown
          .append("option")
          .text(sample)
          .property("value", sample);
      })
  
      // Use the sample data from the list to build the plots
      var sampleData = name[0];
      buildPlots(sampleData);
      metaData(sampleData);
    });
  };
  
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildPlots(newSample);
    metaData(newSample);
  };

// Initialize the dashboard
  init()

