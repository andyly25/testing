#Data on the Web
- a way to represent data between apps and across networks e.g. XML and JSON
- When sending data between apps,Python would have lists and dictionaries but Java has HashMap
	- Need something both agree on: **Wire Protocol**
	- agree on wire format that neither Python nor Java then transform the data to be useable to other app
		- introduce serialize and de-serialize
			- **serialize** act of taking internal structs and create wire format
			- **de-serialize** taking wire format and create internal struct and in different languages
###eXtensible Markup Language
- help information system share structured data
- XML surprisingly looks similar to HTML
	- Start tag, end tags e.g **<person> </person>** 
	- has text content in between
	- attributes, similar to giving an id and etc..
	- self closing tag like <email hide="yes"**/>**
- XML Schema
	- expressed in terms of constraints of struct and content of docs
	- specify a **contract** between systems
	- **validate**: if paricular piece of XML meets specification of Schema
	- many XML Schema Languages
		- Document Type Definition (DTC)
		- XML Schema from W3C (XSD) - commonly used
- XSD 
	- structure
		- xs:element
		- xs:sequence
		- xs:complexType
	- constraints (kind of like restrictions/rules to follow)
		- type="xs:string" //makes so has to be string
		- name="something" //have to use this name
		- minOccurs="1" maxOccurs="1" //how many times you can use this element name
		- and many more
	- Data Type:
		- xs:string
		- xs:date
		- xs:dateTime
			- common represent time in UTC/GMT, servers different across world
			- ISO 8601 format:
				- 2012-12-23T09:22:10Z
				- year month day
				- Time of day
				- the Z is timezome: UTC/GMT
		- xs:decimal
		- xs:integer

```XML
	<!--This is simple type with just text -->
	<person>
		<lastname>Wizard</lastname>
		<age>30</age>
		<dateborn>1986-04-01</dateborn>
	</person>

	<!--This is an XML Schema Contract, complex type -->
	<xs:complexType name="person">
		<xs:sequence>
			<xs:element name="lastname" type="xs:string"/>
			<xs:element name="age" type="xs:integer"/>
			<xs:element name="dateborn" type="xs:date"/>
			</xs:sequence>
		</xs:complexType>
```