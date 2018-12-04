# Politicians campaign financing and contracts network 

![alt tag](https://github.com/63anp3ca/VA/blob/master/img/presentacion.JPG?raw=true)

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
###	Grafica Áreas
Esta visualización consiste en la selección de departamentos, a través de un mapa de Colombia, que basado en una escala de colores enfatice la relación entre el departamento seleccionado y los departamentos financiadores de campañas políticas. Esta escala de colores tendrá como principal objetivo, atraer la percepción del usuario, señalando aquellos aportes que están en la escala alto, medio y bajo.

- Marks	-	ÁREAS (Departamento) 
- Channels	-	SATURATION (Atributo cuantitativo monto)
- Encode	-	ARRANGE  EXPRESS   (Atributo cuantitativo monto)
- Manipulate	/	NAVIGATE / SELECT (Departamento) 
- Facet	-	JUXTAPOSE / MULTIFORM /	OVERVIEW /DETAIL: AGGREGATE  (Monto donación cuantitativa)
- Reduce	-	FILTRO: el modismo propuesto permite la aplicación de un filtro (categórico departamento)





###	Grafica Red
Con esta visualización mostramos al usuario los candidatos de campañas políticas, y los contratistas del estado que se encuentran registrados como financiadores de sus campañas, está consiste en identificar el vínculo directo con uno o varios candidatos de la campaña y su categorización de aporte en el rango de medio, alto y bajo, además de presentar o no la relación de parentesco a juicio del usuario.

- Marks	-	Points (Candidato-financiador)  
-	Líneas (relación candidato financiador)
- Channels	HUE (Atributo categórico candidato - financiador)  
-	Channels SIZE(Tamaño del candidato relacionado con monto recibido)
- Encode	-	ARRANGE / 	EXPRESS (Monto donación cuantitativa)
-  Manipulate	-	NAVIGATE /	SELECT (Departamento) 
- Facet	-	JUXTAPOSE / MULTIFORM /	OVERVIEW /DETAIL: AGGREGATE (Monto donación cuantitativa)
- Reduce	-	FILTRO: el modismo propuesto permite la aplicación de un filtro (categórica Parentesco)


###	Grafica Línea de tiempo
Permite observar una línea de tiempo correspondiente a la celebración de contratos propia de un financiador de campaña seleccionado, y en cada punto del gráfico podemos ver en qué campañas ha registrado como financiador

- Marks	Líneas (Monto contrato)
-	Marks Points (Aporte campaña/Datos contrato)
- Channels	-	Position X cuantitative (Fecha)
- Channels	Position Y cuantitative(Monto, aporte)  
- Encode	-	ARRANGE  /	EXPRESS (Monto donación cuantitativa)
- Manipulate	-	NAVIGATE / -	SELECT (Departamento) 
- Facet	-	JUXTAPOSE / -	MULTIFORM /-	OVERVIEW /DETAIL: -	AGGREGATE (Monto donación cuantitativa)
- Reduce	-	FILTRO: el modismo propuesto permite la aplicación de un filtro (categórica Parentesco)

###	Autores
- Gerardo Antonio Perez Clavijo
- Ivan Rodrigo Romero Florez
- Stanley Smith Melo Fontalvo

## Link de Documentos
###	Aplicación 
https://63anp3ca.github.io/VA/

###	Presentación
https://docs.google.com/presentation/d/1JX8IQJY9JMYXNin8PgF_epyu-FFbpQKzWHwqCPMwUJA/edit#slide=id.g3f50ba3cfe_1_0

###	GitHub
https://github.com/63anp3ca/VA

###	Video
https://www.youtube.com/watch?v=e7HO6224Os0&feature=youtu.be


###	Paper
https://github.com/63anp3ca/VA/tree/master/paper

