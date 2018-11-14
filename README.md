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
•	ACTION (Summarize) (Departamento) 
•	TARGETS – (Features) (Campaña - Valor total de aportes – cuantitativa calculada) 

Tarea Secundaria 1
Resumir los aportes a campañas políticas a nivel departamental por año y departamento de origen de aporte.
•	ACTION (Summarize) (Departamento) 
•	TARGETS – (Features) (Campaña - Valor total de aportes – cuantitativa calculada - Departamento origen de aporte) 

Tarea Secundaria 2:
Identificar los departamento mayor y menor aportes a las campañas.
•	ACTION (Summarize) (Departamento ingreso) 
•	TARGETS – (Features) (Campaña - Valor total de aportes – cuantitativa calculada y departamento) 

Tarea Secundaria 3:
Identificar la distribución de los aportes a una campaña por departamento de ingreso.
•	ACTION (Discover - Locate- Identify) (Departamento ingreso)  
•	TARGETS– (Distribution) (Monto)

### Tarea Principal 2: 
Identificar los financiadores de campaña de cada candidato, su parentesco y su celebración de contratos con el estado.
•	ACTION (Present – Explorer- Identify) (Financiadores)  
•	TARGETS– (Feature) (campaña, contratos, monto, y parentesco)

Tarea Secundaria 1: 
Presentar parentescos de los candidatos con los financiadores de campañas. 
•	ACTION (Present – Explore - Identify) (Candidato)  
•	TARGETS– (Feature) (Financiador,Parentesco, monto)

Tarea Secundaria 2: 
Identificar financiadores de múltiples campañas
•	ACTION (Present – Explore - Identify) (Financiador)  
•	TARGETS– (Feature) (Candidato, monto)

Tarea Secundaria 3: 
Resumir el total de aportes por candidato 
•	ACTION (Summarize) (Candidato) 
•	TARGETS – (Features) (Financiador, Valor total de aportes – cuantitativa calculada) 

Tarea Secundaria 4: 
Identificar los candidatos con mayor de financiación de campañas.
•	ACTION (Summarize) (Candidato) 
•	TARGETS – (Features) (Financiador, Valor total de aportes – cuantitativa calculada) 

### Tarea Principal 3: 
Identificar relación entre el monto del financiamiento y la cantidad de contratos otorgados al financiador. 
•	ACTION (Present – Locate - Identify) (Financiador)  
•	TARGETS - (Features) (Contratos, monto y fecha contrato)

Tarea Secundaria 1: 
Conocer el comportamiento de contratación para el financiador antes y después de un aporte.  
•	ACTION (Present – Locate - Identify) (Financiador)  
•	TARGETS- (Features) (Campaña, Valor total de aportes cuantitativa calculada, Valor contrato y fecha contrato)

Tarea Secundaria 2: 
Presentar el número de contratos asignados a un financiador en un período de tiempo.
•	ACTION (Present – Locate - Identify) (Financiador)  
•	TARGETS – (Features) (Contratos, fecha de inicio)
