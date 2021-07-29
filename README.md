![Screen Shot 2021-07-26 at 3 12 08 PM](https://user-images.githubusercontent.com/76749991/127045436-e52e29e1-3fd2-435e-8a47-1704d5594e91.png)
![Screen Shot 2021-07-26 at 3 12 15 PM](https://user-images.githubusercontent.com/76749991/127045438-5134c8e1-8d4d-41e1-9162-fb8323efda1b.png)

# Plot.ly Belly Button Biodiversity

An interactive dashboard displays the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Step 1: Plotly

1. Use the D3 library to read in `samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

3. Create a bubble chart that displays each sample.

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

6. Update all of the plots any time that a new sample is selected.

7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo.
