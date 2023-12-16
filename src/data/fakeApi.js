
const devTasks = [
  {
    id:1,
    title:"Dolore nisi mollit et irure mollit sit adipisicing nulla deserunt velit nisi eu dolore.",
    description:"In pariatur deserunt ullamco nulla adipisicing elit cupidatat Lorem officia.Consequat est occaecat dolor adipisicing sunt mollit. Laboris qui anim amet cupidatat ipsum aliquip duis enim. Qui pariatur id dolor ex labore velit laborum id minim ut laborum amet.Amet commodo consectetur dolore eu anim laboris ad.Pariatur ea voluptate exercitation labore anim voluptate dolor non consectetur mollit ut non dolore labore. Velit sit ullamco reprehenderit ullamco veniam nisi aute commodo non amet. Proident incididunt deserunt id ad ipsum commodo nisi proident. Ipsum cupidatat pariatur commodo tempor non ullamco pariatur.work on loggingAliquip reprehenderit Lorem officia anim ea. In minim minim duis occaecat adipisicing pariatur mollit do qui voluptate dolor dolor. Mollit Lorem veniam consectetur amet tempor ea voluptate aliqua. Eiusmod aliqua non laboris esse ex veniam cupidatat elit qui non ipsum in.",
    contact:"Matt Spencer",
    contactId: 1,
    type:1,
    status:1
  },
  {
    id:2,
    title:"pocket reports",
    description:"work on pocket reports",
    contact:"Matt Spencer",
    contactId: 2,
    type:1,
    status:2
  },
  {
    id:3,
    title:"local express",
    description:"Laboris adipisicing ut in aliqua reprehenderit. Irure ut aliquip occaecat exercitation sint irure eu consectetur eu consequat. Anim cupidatat excepteur dolore cillum ad ex pariatur consectetur et ad. Quis ipsum et ea sunt eiusmod consectetur ipsum nostrud eu amet. Culpa do nulla quis velit consectetur ex commodo quis proident consequat. Esse deserunt occaecat exercitation proident occaecat officia in.",
    contact:"Matt Spencer",
    contactId: 1,
    type:0,
    status:3
  },
  {
    id:4,
    title:"Michigan liquor import",
    description:"work on michigan liquor import",
    contact:"Matt Spencer",
    contactId: 3,
    type:1,
    status:2
  },
  {
    id:5,
    title:"GLDS dealer key",
    description:"work on glds dealer key",
    contact:"Matt Spencer",
    contactId: 2,
    type:0,
    status:1
  },
  {
    id:5,
    title:"GLDS Shipping plugin",
    description:"Make shipping plugin",
    contact:"Matt Spencer",
    contactId: 1,
    type:1,
    status:1
  },
  {
    id:6,
    title:"GLDS Accounting Export",
    description:"Make accounting export",
    contact:"Matt Spencer",
    contactId: 2,
    type:1,
    status:1
  }
]

const devBoards = [
  {
    id: 1,
    title: "Current SOW's",
    position: 1,
    color: "blue",
    author: ""
  },
  {
    id: 0,
    title: "Needs SOW's",
    position: 2,
    color: "green",
    author: ""
  }
]

const devContacts = [
  {
    id: "1",
    first_name: "Matt",
    last_name: "Spencer",
    phone: "248-435-3234",
    email: "mspencer@glds.net"
  },
  {
    id: "2",
    first_name: "Rich",
    last_name: "Golanek",
    phone: "248-415-3245",
    email: "rgolanek@glds.net"
  },
  {
    id: "3",
    first_name: "Joy",
    last_name: "Ferranti",
    phone: "248-532-7534",
    email: "jf@glds.net"
  },
  {
    id: "4",
    first_name: "dan",
    last_name: "downs",
    phone: "248-532-7534",
    email: "ddowns@glds.net"
  },
  {
    id: "5",
    first_name: "madea",
    last_name: "pfeffer",
    phone: "248-532-7534",
    email: "pfeffer@glds.net"
  },
]


const devFetchTasks = (boardId) => {  
  const results = devTasks.filter(task => task.type === boardId);
  if (results.length > 0) {
    return [...results]
  }
  return [];
}

const devFetchBoards = () => {  
  return devBoards.map(board => board);
}

const devFetchContacts = () => {
  return devContacts.map(c => c);
}



export {
  devFetchTasks,
  devFetchBoards,
  devFetchContacts
}