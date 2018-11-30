# Redes de Contratación Pública y Financiación de Campañas 

## INTRODUCCION
 
Datasketch es una plataforma digital de periodismo de investigación y de datos. Nuestro portal permite que periodistas, científicos de datos, científicos sociales y la ciudadanía en general pueda aprender y consultar sobre visualizaciones de datos, herramientas, software e investigaciones profundas sobre diversos temas coyunturales. Contamos con herramientas gratuitas de datos y diferentes proyectos para tender un puente entre los datos y la ciudadanía que facilite la democratización del conocimiento y una revisión crítica de las realidades sociales a partir de contrastes de información.

## OBJETIVO
Visualizar posibles irregularidades en el financiamiento de campañas políticas para Congreso y Territoriales agregadas a nivel departamental, y su influencia en la contratación pública


## WHAT
Dataset
El conjunto de datos es de tipo tabla y se describen la fuente a continuación:
-	Contratos_financiadores_data: esta tabla contiene 149,070 registros y su propósito es obtener la información de contratación pública de las entidades estatales, con respecto a los proveedores de servicios correspondientes. (2010-2017) financiadores que ha tenido contratos con el estado.

Tipos de atributos
La Tabla Contratos_financiadores_data originalmente cuenta  79 atributos de los cuales se eligieron 17 atributos, que presentan la siguiente tabla:


## WHY
### Tarea Principal 1.
Resumir los aportes a campañas políticas a nivel nacional por año.
- ACTION (Summarize) (departamento: categórico)
- TARGETS – (Features) (campaña: categórico, valor total de aportes: cuantitativa calculada) 

Tarea Secundaria 1:
Resumir los aportes a campañas políticas a nivel departamental por año y departamento de origen de aporte.
-	ACTION (Summarize) (departamento: categórico) 
-	TARGETS – (Features) (campaña: categórico, valor total de aportes: cuantitativa calculada, departamento origen de aporte: categórico) 

Tarea Secundaria 2:
Identificar los departamentos con mayor y menor aportes a las campañas.
-	ACTION (Summarize) (departamento origen de aporte: categórico) 
-	TARGETS – (Features) (campaña: categórico, valor total de aportes: cuantitativa calculada, departamento: categórico) 

Tarea Secundaria 3:
Identificar la distribución de los aportes a una campaña por departamento de ingreso.
-	ACTION (Discover - Locate- Identify) (Departamento origen de aporte: categórico)  
-	TARGETS– (Distribution) (Monto: cuantitativo)


### Tarea Principal 2: 
Identificar los financiadores de campaña de cada candidato, su parentesco y su celebración de contratos con el estado.
-	ACTION (Present – Explorer- Identify) (Financiador: categórico)  
-	TARGETS– (Feature) (campaña: categórico, numeroContrato: categórico, monto: cuantitativa, parentesco: categórico)

Tarea Secundaria 1: 
Presentar parentescos de los candidatos con los financiadores de campañas. 
-	ACTION (Present – Explore - Identify) (candidato: categórico)  
-	TARGETS– (Feature) (financiador: categórico, parentesco: categórico, monto: cuantitativo)

Tarea Secundaria 2: 
Identificar financiadores de múltiples campañas
-	ACTION (Present – Explore - Identify) (Financiador: categórico)  
-	TARGETS– (Feature) (Candidato: categórico, monto: cuantitativo)

Tarea Secundaria 3: 
Resumir el total de aportes por candidato 
-	ACTION (Summarize) (candidato: categórico) 
-	TARGETS – (Features) (financiador: categórico, valor total de aportes: cuantitativa calculada) 

Tarea Secundaria 4: 
Identificar los candidatos con mayor de financiación de campañas.
-	ACTION (Summarize) (candidato: categórico) 
-	TARGETS – (Features) (financiador: categórico, valor total de aportes: cuantitativa calculada) 

### Tarea Principal 3: 
Identificar relación entre el monto del financiamiento y la cantidad de contratos otorgados al financiador. 
-	ACTION (Present – Locate - Identify) (financiador: categórico)  
-	TARGETS - (Features) (contrato: categórico, monto: cuantitativo y fecha contrato: secuencial)

Tarea Secundaria 1: 
Conocer el comportamiento de contratación para el financiador antes y después de un aporte.  
-	ACTION (Present – Locate - Identify) (financiador: categórico)  
-	TARGETS- (Features) (campaña: categórico, valor total de aportes: cuantitativa calculada, monto: cuantitativa,fecha contrato: secuencial)

Tarea Secundaria 2: 
Presentar el número de contratos asignados a un financiador en un período de tiempo.
-	ACTION (Present – Locate - Identify) (financiador: categórico)  
-	TARGETS – (Features) (contratos: categórico, fecha de inicio: secuencial)



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


