# Politicians campaign financing and contracts network 

![alt tag](https://github.com/63anp3ca/VA/blob/master/img/presentacion.JPG?raw=true)

###	Paper
A continuación, el enlace al paper del projecto:

https://docs.google.com/document/d/1ozn7Li8_N6dC5guDjG0KkcUO4Cgy30kKby6obk6Siuk/edit?usp=sharing
https://github.com/63anp3ca/VA/tree/master/paper


## INTRODUCTION
 
Datasketch is a digital platform specialized in journalistic research and data. It provides a portal that allows journalists, data scientists, social scientist and citizens in general, to learn and consult about data visualization, tools, software and in-depth research about several conjunctural subjects. It has free data tools and different projects in order to create a link between the data and the citizenship, facilitating the democratization of knowledge and a critical review about social realities based on information contrasts..

## OBJECTIVE
Provide visualization tools that let the possible irregularities in the financing of political campaigns for Congress and territorial aggregates at a departmental level to be explored, and their influence on public procurements.


## WHAT
Dataset
The data set is a table type and it’s descripted as following:
-	Contratos_financiadores_data: this table contains 149,070 records and its purpose is to obtain public procurement information from state entities, with regard to the corresponding service providers. (2010 -2017) funders that have had contracts with the state..

Types of attributes:
The table Contratos_financiadores_data originally has 79 attributes from which 17 were picked.


## WHY
### Main Task 1..
Summarize the contributions made to political campaigns nationwide per year
- ACTION (Summarize) (department: Categorical) 
- TARGETS – (Features) (campaign: Categorical, total contributions: quantitative calculated)  

#### Secondary Task 1
Obtain a list of contributions made to political campaigns at a department level.
-	ACTION (Summarize) (department: Categorical) 
-	TARGETS – (Features) (campaign: Categorical, total contributions: quantitative calculated, department of origin of the contribution: Categorical)  

#### Secondary Task 2:
Identify departments with greater and lesser contributions to campaigns
-	ACTION (Summarize) (department of origin of the contribution: Categorical) 
-	TARGETS – (Features) (campaign): Categorical, total contributions: quantitative calculated, department: Categorical) 

#### Secondary Task 3:
Identify the distribution of contributions to a campaign by income of the department.
-	ACTION (Discover - Locate- Identify) (department of origin of the contribution: Categorical)    
-	TARGETS– (Distribution) (Consideration: quantitative)


### Main Task 2: 
Identify each candidate’s campaign funders, as well as their relationships and contracts with the State.
-	ACTION (Present – Explorer- Identify) (Funder: Categorical)    
-	TARGETS– (Feature) (campaign: Categorical, Contract Number: Categorical, consideration: quantitative, relationship: Categorical)

#### Secondary Task 1:  
Present candidates' relationships with campaign funders. 
-	ACTION (Present – Explore - Identify) (candidate: Categorical)    
-	TARGETS– (Feature) (funder: Categorical, relationship: Categorical, consideration: quantitative)

#### Secondary Task 2: 
Identify funders of multiple campaigns 
-	ACTION (Summarize) (candidato: categórico) 
-	TARGETS – (Features) (financiador: categórico, valor total de aportes: cuantitativa calculada) 

#### Secondary Task 3:  
Summarize the total contributions per candidate
-	ACTION (Summarize) (candidate: Categorical)  
-	TARGETS – (Features) (Funder: Categorical, total contributions: quantitative calculated) 

#### Secondary Task 4: 
Identify the candidates with the most campaign financing.
-	ACTION (Summarize) (candidate: Categorical) 
-	TARGETS – (Features) (Funder: Categorical, total contributions: quantitative calculated) 

### Main Task 3:  
Identify the relationship between the amount of financing and the number of contracts awarded to the funder.  
-	ACTION (Present – Locate - Identify) (Funder: Categorical)    
-	TARGETS - (Features) (contract: Categorical, consideration: quantitative y contract date: sequential)

#### Secondary Task 1:  
Know the contracting behavior for the funder before and after a contribution  
-	ACTION (Present – Locate - Identify) (funder: Categorical)    
-	TARGETS- (Features) (campaign: Categorical, total of contributions: quantitative calculated, consideration: quantitative, contract date: sequential)

#### Secondary Task 2:  
Present the number of contracts assigned to a funder in a period of time
-	ACTION (Present – Locate - Identify) (Funder: Categorical)    
-	TARGETS – (Features) (contracts: Categorical, start date: sequential)



## HOW
###	Graphic Areas
This visualization consists in choosing departments, through a Colombian map, which based on a color scale emphasizes the relationship between the selected department and the financing departments of the political campaigns. This color scale will have as main objective, to attract the perception of the user, pointing out those contributions that are in the high, medium and low scale.

![alt tag](https://github.com/63anp3ca/VA/blob/master/img/v1.JPG?raw=true)

- Marks	-	-	AREAS (Department) 
- Channels	-	-	SATURATION (Attribute quantitative consideration)
- Encode	-	ARRANGE  EXPRESS   (Attribute quantitative consideration)
- Manipulate	/	NAVIGATE / SELECT (Department) 
- Facet	-	JUXTAPOSE / MULTIFORM /	OVERVIEW /DETAIL: AGGREGATE  (Consideration quantitative)
- Reduce	-	FILTER: he proposed idiom allows the application of a filter (Categorical department)


###	Network Chart
With this visualization the user gets to see, the candidates of political campaigns, the state contractors that are registered as funders of its own campaigns. It consists in identifying the direct link with one or several candidates of the campaign and its categorization of the contribution in the high, medium and low rank, in addition to show or not, the relationship to the user’s judgement.

![alt tag](https://github.com/63anp3ca/VA/blob/master/img/v2.JPG?raw=true)

- Marks	-	Points (Candidate - Funder)  
-	Marks - Lines (Relationship Candidate - Funder)
- Channels	-	HUE (Attribute Categorical Candidate - Funder)    
-	Channels -	SIZE (size of Candidate - Consideration)
- Encode	-	ARRANGE / 	EXPRESS (Consideration quantitative)
- Manipulate	-	NAVIGATE /	SELECT (Relationship) 
- Facet	-	JUXTAPOSE / MULTIFORM /	OVERVIEW /DETAIL: AGGREGATE (Consideration quantitative)
- Reduce	-	-	FILTRO: the proposed idiom allows the application of a filter (categorical Relationship)


###	Timeline Chart
It allows to observe timeline corresponding to the conclusion of contracts of a selected campaign funder. Each point of the chart shows in which campaigns a funder has been registered.

![alt tag](https://github.com/63anp3ca/VA/blob/master/img/v3.JPG?raw=true)

- Marks	-	Lines (Contract Amount)
-	Marks -	Points (Consideration, Campaign / Contract Number)
- Channels	-	Position X quantitative (Start Date)
- Channels	-	Position Y quantitative (Contract Amount)  
- Encode	-	ARRANGE  /	EXPRESS (Consideration quantitative)
- Manipulate	-N/A
- Facet	-	JUXTAPOSE / -	MULTIFORM /-	OVERVIEW /DETAIL: -	AGGREGATE (Contract Amount)
- Reduce	-	N/A

###	Members
- Gerardo Antonio Perez Clavijo
- Ivan Rodrigo Romero Florez
- Stanley Smith Melo Fontalvo

## Link to Documents
###	Application 
https://63anp3ca.github.io/VA/

###	Presentation
https://docs.google.com/presentation/d/1JX8IQJY9JMYXNin8PgF_epyu-FFbpQKzWHwqCPMwUJA/edit#slide=id.g3f50ba3cfe_1_0

###	GitHub
https://github.com/63anp3ca/VA

###	Video
https://www.youtube.com/watch?v=e7HO6224Os0&feature=youtu.be



