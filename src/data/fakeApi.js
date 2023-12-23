
const devTasks = [
  {
    id:1,
    title:"Dolore nisi mollit et irure mollit sit adipisicing nulla deserunt velit nisi eu dolore.",
    description:"In pariatur deserunt ullamco nulla adipisicing elit cupidatat Lorem officia.Consequat est occaecat dolor adipisicing sunt mollit. Laboris qui anim amet cupidatat ipsum aliquip duis enim. Qui pariatur id dolor ex labore velit laborum id minim ut laborum amet.Amet commodo consectetur dolore eu anim laboris ad.Pariatur ea voluptate exercitation labore anim voluptate dolor non consectetur mollit ut non dolore labore. Velit sit ullamco reprehenderit ullamco veniam nisi aute commodo non amet. Proident incididunt deserunt id ad ipsum commodo nisi proident. Ipsum cupidatat pariatur commodo tempor non ullamco pariatur.work on loggingAliquip reprehenderit Lorem officia anim ea. In minim minim duis occaecat adipisicing pariatur mollit do qui voluptate dolor dolor. Mollit Lorem veniam consectetur amet tempor ea voluptate aliqua. Eiusmod aliqua non laboris esse ex veniam cupidatat elit qui non ipsum in.",
    contact:"Matt Spencer",
    contactId: 1,
    priority: 1,
    type:1,
    status:1
  },
  {
    id:2,
    title:"pocket reports",
    description:"work on pocket reports",
    contact:"Matt Spencer",
    contactId: 2,
    priority: 2,
    type:1,
    status:2
  },
  {
    id:3,
    title:"local express",
    description:"Laboris adipisicing ut in aliqua reprehenderit. Irure ut aliquip occaecat exercitation sint irure eu consectetur eu consequat. Anim cupidatat excepteur dolore cillum ad ex pariatur consectetur et ad. Quis ipsum et ea sunt eiusmod consectetur ipsum nostrud eu amet. Culpa do nulla quis velit consectetur ex commodo quis proident consequat. Esse deserunt occaecat exercitation proident occaecat officia in.",
    contact:"Matt Spencer",
    contactId: 1,
    priority: 1,
    type:0,
    status:2
  },
  {
    id:4,
    title:"Michigan liquor import",
    description:"work on michigan liquor import",
    contact:"Matt Spencer",
    contactId: 3,
    priority: 3,
    type:1,
    status:4
  },
  {
    id:5,
    title:"GLDS dealer key",
    description:"work on glds dealer key",
    contact:"Matt Spencer",
    contactId: 2,
    priority: 2,
    type:0,
    status:1
  },
  {
    id:5,
    title:"GLDS Shipping plugin",
    description:"Make shipping plugin",
    contact:"Matt Spencer",
    contactId: 1,
    priority: 4,
    type:1,
    status:3
  },
  {
    id:6,
    title:"GLDS Accounting Export",
    description:"Make accounting export",
    contact:"Matt Spencer",
    contactId: 2,
    priority: 5,
    type:1,
    status:5
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

const devStatusTypes = [
  {
    id: 1,
    title:"new",
    color: "rgb(255, 255, 255)"
  },
  {
    id: 2,
    title:"seen",
    color: "rgba(0, 150, 255,1)"
  },
  {
    id: 3,
    title:"started",
    color: "rgba(255, 240, 31,1)"
  },
  {
    id: 4,
    title:"holding",
    color: "rgba(255,173,0,1)"
  },
  {
    id: 5,
    title:"complete",
    color: "rgba(68,214,44,1)"
  },
  {
    id: 6,
    title:"delayed",
    color: "rgba(255, 49, 49,1)"
  }
]


const devPriorities = [
  {
    id: 1,
    level:1
  },
  {
    id: 2,
    level:2
  },
  {
    id: 3,
    level:3
  },
  {
    id: 4,
    level:4
  },
  {
    id: 5,
    level:5
  }
]


const devListItemMainMenuItems = [
  {
    id: 1,
    name: "Assignee",
  },
  {
    id: 2,
    name: "Status",
  },
  {
    id: 3,
    name: "Priority",
  }    
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

const devFetchStatusTypes = () => {
  return devStatusTypes.map(c => c);
}

const devFetchPriorities = () => {
  return devPriorities.map(c => c);
}

const devFetchListItemMainMenuItems = () => {
  return devListItemMainMenuItems.map(c => c);
}



export {
  devFetchTasks,
  devFetchBoards,
  devFetchContacts,
  devFetchStatusTypes,
  devFetchPriorities,
  devFetchListItemMainMenuItems
}