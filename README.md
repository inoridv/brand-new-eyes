# Brand New Eyes  
The Brand New Eyes is a project built at the Hack the Campus Hackathon on 2017.
## Overview
The project is focused on centralizing data from Unicamp transparency project by using a Data Lake, creating new possibilities for data mining, manipulating, analysis and visualization.
From that centralized data source we created an interactive Unicamp map that uses that info to produce charts and reports in an institute basis.  
## Purpose
Our purpose is to host Unicamp's data that should be public in the cloud. We built a data lake architecture, which begins with some ETL processes to gather the data from Unicamp's on-premise sources via scheduled pipelines and move it to Microsoft Azure. From there we have an HDFS prepared for both large-scale data processing or simple data/file gathering. From that, we also enable analytics services and move the data to other services that provide more flexibility in the data analysis. Using that data sink, we consume everything to create an interactive map that relates the data to the university's institutes and provides some default reports, while also integrating with BI tools to provide extremely customizable reports that can give every user the needed independence while looking up the data.  
## Prerequisites  
  
## Components
The project has the following components:
* [Back-End](back-end)
* [Pipelines](pipelines)
* [WebApp](webapp)
