import { v4 as uuid } from "uuid";

/**
 * Brand Database can be added here.
 * You can add brand of your wish with different attributes
 * */

export const brands = [
  {
    _id: uuid(),
    brandName: "Intel",
    image:
      "data:image/png;base64,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",
  },
  {
    _id: uuid(),
    brandName: "AMD",
    image:
      "https://i.etsystatic.com/23511185/r/il/7112ac/2408810313/il_fullxfull.2408810313_kqb8.jpg",
  },
  {
    _id: uuid(),
    brandName: "Nvidia",
    image:
      "https://preview.redd.it/nibcq8te6d771.jpg?width=640&crop=smart&auto=webp&s=625114dad49707a08906c90b7ed5cffa2428ef24",
  },
  {
    _id: uuid(),
    brandName: "Cooler Master",
    image:
      "https://pngimage.net/wp-content/uploads/2018/05/cooler-master-logo-png-3.png",
  },
  {
    _id: uuid(),
    brandName: "Corsair",
    image:
      "https://logodownload.org/wp-content/uploads/2014/09/corsair-logo-0.png",
  },
  {
    _id: uuid(),
    brandName: "Logitech",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX///8AAAAAuP0Atf0As/37+/vu7u7W1taRkZE6OjosLCyYmJju+f/Hx8cAtP03v/1VVVXAwMDf39/Pz88nvP2KiopdXV2L1f7l5eX09PSe3P5ubm4UFBR4eHicnJxlyv3V7/9XV1ekpKQbGxuDg4Pf8/+1tbU9PT1NTU0kJCRFRUV0dHS04/71+//D6P5NxP2o3/560P5lZWWN1v400F9qAAAFV0lEQVR4nO2a6XqiMBhGWcVdgWKxWG3dau02tfd/bwPZA5aKwjhPn/f8UUIiOU3yZaGGAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA276+v165Dc2y+Ro4zHN5cux5N8TpybCtjdO2aNMP7zdBi1Gjohp4XTisUmL507t0zHrT1fb9VmmPhWFYDhi0zxatQYJbmX1V/jps9Z1CSYWPZ1n9hOMjym9v0mxeGYXxyuZ8MH5QGvK7hlhi202/P6Wd0crkfDHOC1zQk+UmBDjM9jXLD/lAXtK85Dgesk9ZqeKPqDZ3R4qtCjX6gsmFahH7UaHirBBnn471SbX4kZxiEYSGku97RkPKUFuzJyzgMg0KeOOC/JgyPPGEjB6F981DdoRzV0N+RQWZG6vzIEp8nGbupkUwm463R2h2yaaOTpWQm97Rkokoun0jaoy8MQ5fm6/paHT5kB13U7acaTjumYClud02NFgmhPSMWKZlhJDOI6DqQad2YGfZE0kGpgmzC4Wf9gtJQ1jljTe8GZo6W0S0aTtQcrO5LrZhHDRXuZRU++Si0P/S63Tl2Hqd/vmGuBqQVp3nB1KdoSFtwdZgoJX29WKdgaMr+LJrQztXtTl3lsDh0viEdIMs0CIRj3jascUgiGY2zNI0aunEr69TrVszaOZReU/73Wm1b06CdfnkyuGE7nrboomHNa/DO50L7T5OGtLVYkItYDWJRYZ7oc0NDzhaJkik06d159jlmT5h1DG5I/g70d595DcRUkW/Ceg2X8vkppMEMo83al7JPL3ZHDEXPzDjQuj/TH2CPcLlhwlJe1Ns8ktqFMFOrYUIGC4fEwZiIPumJRUMvS76PGI+kQaemqc2V3HDLLraqIdcYFmb6Wg336sigfTYkrRPpiXHBMBdTSBAhQ1NfwGhrGl815IHG2TRq+GSqSzBWHbOYGBQMt0XD0Ktg2BeGb40aZlFTzsIBTewWE1sFQ9J5d49jyd6L1S55smGhbsp8eLkhCSricIJdJWpnMtbHx2GsRRoGsa5qWGhDhZuLDUm/4qGOVHrPOiBP5DmOxlI+WxghHbcH1WfplxmWjMNaDUl9mQ2Z1LKpj1b+RVYqy1gwJIvNGV2i9NjAlT9B1hKDMkMxHZadAtdgyFagSS+iC/B9dpNFkZdeRBfg2aAsGLL13q7dI72aRl+6GupGLG1QYijmw7J9RQ2GuaUy63aJlkaWIUVDTy+5IsN5pqWNSwy/eCOWDcQ6DDXFFd+k3iuJHfe4oa7INg1uV0/73vBBrEtvGzY0gj2vkXI4MXjmiSxezvh95azNXfNMB7llmIu/TLYaJIZ846sZGqdMBRcYumEKj4TBPHmcrPUNuOH1kvEhEokhPyaNgyCQ5xHhst1eDvTDcD+ajJM5c05zB/w50+xCZBP7Q+v79zEXGJbRTpErEzdKL4tHMZfTlxvEj+/yNGSY9aUXcRXI/lwzC9GI9uibaGOdv8cv46ANl7kMsTXTVw68h/ltMOXrlvJZtvCpDomufBNEthad0vxnc6cceQ+tu7LFTb24SgxtrbLv2x9KnMtI3UXYznDUwKniUejpX3fub+nU323qQW+WTp3vLcoRMySl/A3nJfRzW8F/95ZbUzz9bWF1+rZ9HUO5MjGTc95tn87baHgdw3SDceiaq8d5cz2U89XMe/z/ic2HY/9uw3SfsXDoePy1hulwfF1YjuP82v+Jorxt3mt+DwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOJu/9UtKCwGrccAAAAAASUVORK5CYII=",
  },
  {
    _id: uuid(),
    brandName: "Asus",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYyydE21DjrSJ02ZQJ5pzQq_Q3fN0FwGcIB2jTMp5WmxgEJEYZxjp-_LlfBHhohf8DhM&usqp=CAU",
  },
  {
    _id: uuid(),
    brandName: "MSI",
    image:
      "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032018/untitled-3_15.png?abUPY7LWeppVzutP0pXOmFnqBODo5tvD&itok=nnuMRITW",
  },
];
