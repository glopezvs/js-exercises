const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
   ];
   const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
   const person = {
    name: "Costas",
    address: {
    street: "Lalaland 12"
    }};




    // Faz console.log do nome de cada empresa usando forEach; 
        
    const getCompanyName = () => companies.forEach((company) => {console.log(`Company name: ${company.name}`) })
    getCompanyName()
    

    // Faz console.log do nome de cada empresa iniciada após 1987;
    
    const start = (start = 18) => companies.filter((company) => company.start > start)
    console.log(start(1999));

    // Faz console.log da soma se somar todas os valores do array ages usando reduce;

    const sum =  ages.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(sum);

    // Faz console.log de um novo objeto que tenha as propriedades de name e category iguais a companies[0], usando o destructuring de objects.
    
    const newObject = { name: companies[0].name, category: companies[0].category };
    console.log(newObject);
    

    // Faz destructuring da propriedade street e cria uma variável chamada street do objet person.


    const newObject2 = {street: person.address.street};
    console.log(newObject2);

    const {address: {street}} = person
    console.log(street)

    // Cria uma função que devolve as companies que tenham uma data de início superior a 1996 e inferior a 2004, inclusivé
    
    const getCompanyDates = companies => companies.filter(company => company.start >= 1996 && company.start <= 2004);

    const filteredCompanies = getCompanyDates(companies);
    console.log(filteredCompanies);

