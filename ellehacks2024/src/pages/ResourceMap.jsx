import Typography from "@mui/material/Typography";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function ResourceMap() {
  const position = { lat: 43.6532, lng: -79.3832 };

  const services = [
    {
      name: "South Asian Wellness Group Drop-In",
      address: "500 Hallmark Drive Waterloo, Ontario N2K 3P5 Canada",
      coords: { lat: 43.49886891594557, lng: -80.51836158297499 },
      tags: ["Support for Youth"],
      communities: "Indian",
      area: "Waterloo",
    },
    {
      name: "Punjabi Community Health Services",
      address: "2980 Drew Road, Unit 241 Mississauga, Ontario L4T 0A7 Canada",
      coords: { lat: 43.7099738541745, lng: -79.65169854667158 },
      tags: ["Career Guidance", "Language Development", "Support for Youth"],
      communities: "Indian",
      area: "Toronto",
    },
    {
      name: "Punjabi Community Health Services",
      address: "50 Sunny Meadow Boulevard Brampton, Ontario L6R 1X5 Canada",
      coords: { lat: 43.75292201387561, lng: -79.74271202133497 },
      tags: ["Career Guidance", "Language development", "Mentor Support"],
      communities: "Indian",
      area: "Toronto",
    },
    {
      name: "South Asian AIDs Prevention",
      address: "120 Carlton Street, Unit 315 Toronto, Ontario M5A 4K3 Canada",
      coords: { lat: 43.663277848530456, lng: -79.37640546746222 },
      tags: ["Career Guidance", "LGBTQ2 Support"],
      communities: "Indian",
      area: "Toronto",
    },
    {
      name: "Chinese Association of Mississauga",
      address:
        "1177 Central Parkway West, Unit 16 Mississauga, Ontario L5C 4P3 Canada",
      coords: { lat: 43.568153190909065, lng: -79.660743459626 },
      tags: ["Language Development"],
      communities: "Chinese",
      area: "Toronto",
    },
    {
      name: "Philippines overseas Labour Office",
      address: "160 Eglinton Avenue East Toronto, Ontario M4P 3B5 Canada",
      coords: { lat: 43.708550857790044, lng: -79.39349952138046 },
      tags: ["Career Guidance", "Support for Women", "Support for youth"],
      communities: "Philippines",
      area: "Toronto",
    },
    {
      name: "Black Coalition for AIDS Prevention",
      address: "20 Victoria Street, 4th Floor Toronto, Ontario M5C 2N8 Canada",
      coords: { lat: 43.65087799418978, lng: -79.37745639022936 },
      tags: ["Career Guidance", "Support for women", "Support for LGBTQ2"],
      communities: "African",
      area: "Toronto",
    },
    {
      name: "Acces Employment",
      address:
        "2085 Hurontario Street, Suite 210 Mississauga, Ontario L5A 4G1 Canada",
      coords: { lat: 43.57097770904295, lng: -79.60138592152306 },
      tags: ["Career Guidance", "Support for youth"],
      communities: "all",
      area: "Toronto",
    },
    {
      name: "Achev",
      address:
        "263 Queen Street East, Unit 14 Brampton, Ontario L6W 3J3 Canada",
      coords: { lat: 43.70071368752852, lng: -79.74302249811083 },
      tags: ["Career Guidance", "Language development"],
      communities: "all",
      area: "Toronto",
    },
    {
      name: "Adult Language and Learning",
      address: "240 King Street West Chatham, Ontario N7M 1E7 Canada",
      coords: { lat: 42.40601991006358, lng: -82.18909819943441 },
      tags: ["Language development", "Career Guidance"],
      communities: "All",
      area: "London",
    },
    {
      name: "NIGERIAN CANADIAN ASSOCIATION",
      address:  "Etobicoke Civic Centre, 399 The West Mall, Etobicoke, ON M9C 2Y2",
      coords: { lat: 43.643780, lng:  -79.565460},
      tags: ["Career Development"],
      communities: "African",
      area: "Toronto",
      },
      
    {
      name: "St. Michaels Hospital",
      address:  "36 Queen St E, Toronto, ON M5B 1W8",
      coords: { lat: 43.6537, lng:  -79.3778},
      tags: ["Emergency"],
      communities: "All",
      area: "Toronto",
    },
    {
      name: "Toronto General Hospital",
      address:  "200 Elizabeth St, Toronto, ON M5G 2C4",
      coords: { lat: 43.6590, lng:  -79.3884},
      tags: ["Emergency"],
      communities: "All",
      area: "Toronto",
      },
      {
        name: "Christie Ossington Neighbourhood Centre",
        address:  "973 Lansdowne Ave, Toronto, ON M6H 3Z5",
        coords: { lat: 43.66908344222389, lng:  -79.43932410742754},
        tags: ["Emergency", "Shelter"],
        communities: "All",
        area: "Toronto",
      },
      {
        name: "Sistering",
        address:  "962 Bloor St W, Toronto, ON M6H 1L6",
        coords: { lat: 43.66182134011321, lng:  -79.4284311889657},
        tags: ["Emergency", "Women", "LGBTQ+ Support"],
        communities: "All",
        area: "Toronto",
      },
      {
        name: "Fort York Food Bank",
        address:  "380 College St, Toronto, ON M5T 1S6",
        coords: { lat: 43.657388346909165, lng:  -79.40511801266919},
        tags: ["Emergency", "Food Bank"],
        communities: "All",
        area: "Toronto",
      },
      {
        name: "South Riverdale Health Centre",
        address:  "955 Queen St E, Toronto, ON M4M 3P3",
        coords: { lat: 43.66120139541609, lng:  -79.33900421087823 },
        tags: ["Emergency", "Naloxone"],
        communities: "All",
        area: "Toronto",
      },
      {
        name: "The Works",
        address: "277 Victoria St, Toronto, ON M5B 1W2",
        coords: { lat: 43.65678446151753, lng: -79.37936687410448 },
        tags: ["Emergency", "Naloxone"],
        communities: "All",
        area: "Toronto",
      },

      {
        name: "The Food Bank of Waterloo Region",
        address:  "50 Alpine Ct, Kitchener, ON N2E 2M7",
        coords: { lat: 43.424358, lng:  -80.478363},
        tags: ["Emergency", "Food Bank"],
        communities: "All",
        area: "Waterloo",
      },
      
      {
        name: "Central Ontario Chinese Cultural Centre Inc",
        address:  "100 Campbell Ave, Kitchener, ON N2H 4X8",
        coords: { lat: 43.471958, lng:  - 80.477219},
        tags: ["Language Development"],
        communities: "Chinese",
        area: "Waterloo",
      }
         
  ];

  const indianOrder = [
    "Toronto",
    "Waterloo",
    "Ottawa",
    "Hamilton",
    "London",
    "Oshawa",
    "Windsor",
    "Guelph",
    "St. Catharines",
    "Brantford",
    "Barrie",
    "Kingston",
    "Peterborough",
    "Stratford",
    "Cobourg",
    "Collingwood",
  ];
  const chineseOrder = [
    "Toronto",
    "Ottawa",
    "Kitchener",
    "London",
    "Hamilton",
    "Niagara",
    "Windsor",
    "Guelph",
    "Barrie",
    "Oshawa",
    "Kingston",
    "Peterborough",
    "Brantford",
    "Collingwood",
    "Stratford",
    "Cobourg",
  ];
  const africanOrder = [
    "Toronto",
    "Ottawa",
    "Waterloo",
    "Hamilton",
    "London",
    "Windsor",
    "Niagara",
    "Oshawa",
    "Kingston",
    "Guelph",
    "Barrie",
    "Peterborough",
    "Stratford",
    "Collingwood",
    "Cobourg",
  ];
  const philippinesOrder = [
    "Toronto",
    "Ottawa",
    "Hamilton",
    "Niagara",
    "Waterloo",
    "London",
    "Windsor",
    "Guelph",
    "Oshawa",
    "Barrie",
    "Kingston",
    "Peterborough",
    "Brantford",
    "Stratford",
    "Collingwood",
    "Cobourg",
  ];

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(services);
  const [loading, setLoading] = useState(false);
  const [infoWindowVisible, setInfoWindowVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCommunity, setSelectedCommunity] = useState("All");
  let filters = [
    "Career Guidance",
    "Language Development",
    "Support for Youth",
    "Mentor Support",
    "LGBTQ2 Support",
  
  ];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    console.log("Filtered items before filtering:", filteredItems);
    filterItems();
  }, [selectedFilters, selectedCommunity]);

  // const filterItems = () => {
  //   let filtered = services.filter((item) => {
  //     if (selectedCommunity !== "All") {
  //       return item.communities === selectedCommunity;
  //     }
  //     return true;
  //   });

  //   if (selectedFilters.length > 0) {
  //     filtered = filtered.filter((item) =>
  //       selectedFilters.some((filter) => item.tags.includes(filter))
  //     );
  //   }

  //   setFilteredItems(filtered);
  //   setLoading(false);
  // };

  const filterItems = () => {
    let filtered = services.filter((item) => {
      if (selectedCommunity !== "All") {
        return item.communities === selectedCommunity;
      }
      return true;
    });

    if (selectedFilters.length > 0) {
      // Apply filtering based on selected filters
      filtered = filtered.filter((item) => {
        // Check if any of the item's tags match any of the selected filters
        return selectedFilters.some((filter) => item.tags.includes(filter));
      });
    }

    // If sorting by community is required, reorder the filtered items
    if (selectedCommunity !== "All") {
      const sortedFilteredItems = reorderServicesByCommunity(
        selectedCommunity,
        filtered
      );
      setFilteredItems(sortedFilteredItems);
    } else {
      // Otherwise, set the filtered items directly without sorting
      setFilteredItems(filtered);
    }

    setLoading(false);
  };

  const reorderServicesByCommunity = (community) => {
    // Filter services based on the selected community
    const filteredServices = services.filter(
      (service) => service.communities === community
    );
    // Sort filtered services based on area within the community
    const sortedServices = filteredServices.sort((a, b) => {
      // Check if the services belong to the selected community
      if (a.communities !== community || b.communities !== community) {
        // If not, maintain their relative order
        return 0;
      }
      //Find the index of each service's area within the community order array
      const orderArray = getCommunityOrderArray(community);
      const orderA = orderArray.indexOf(a.area);
      const orderB = orderArray.indexOf(b.area);
      //If both areas are not in the order array, maintain their relative order
      if (orderA === -1 && orderB === -1) {
        return 0;
      }
      // If only one area is in the order array, prioritize it over the other
      else if (orderA === -1) {
        return 1;
      } else if (orderB === -1) {
        return -1;
      }
      // If both areas are in the order array, sort them according to the order
      else {
        // If the areas are equal, sort alphabetically by service name
        if (orderA === orderB) {
          return a.name.localeCompare(b.name);
        } else {
          return orderA - orderB;
        }
      }
    });
    // Update the state with the sorted services
    setFilteredItems(sortedServices);
    return sortedServices;
  };

  const getCommunityOrderArray = (community) => {
    switch (community) {
      case "Indian":
        return indianOrder;
      case "Chinese":
        return chineseOrder;
      case "African":
        return africanOrder;
      case "Philippines":
        return philippinesOrder;
      default:
        return [];
    }
  };

  const handleCommunityChange = (event) => {
    setSelectedCommunity(event.target.value);
    const reorderedServices = reorderServicesByCommunity(event.target.value);
    setFilteredItems(reorderedServices);
  };

  const handleMarkerClick = (service) => {
    console.log("Marker clicked:", service);
    setSelectedService(service);
    setInfoWindowVisible(true);
  };

  const Markers = () => {
    return services.map((service, index) => (
      <AdvancedMarker
        key={index}
        position={service.coords}
        offset={[0, -20]} // Offset the pin vertically so it doesn't overlap with the map's default pin
        onClick={() => handleMarkerClick(service)}
      >
        <Pin />
      </AdvancedMarker>
    ));
  };

  return (
    <APIProvider apiKey="AIzaSyDWksupsmk_cm2qJ1UhI5QYqtvngmfuvPs">
      <div className="resource-map-container">
        <Typography variant="h4" style={{ fontFamily: "Roboto" }}>
          Resource Map
        </Typography>

        <div className="buttons-container">
          {filters.map((category, index) => (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`button ${
                selectedFilters?.includes(category) ? "active" : ""
              }`}
              key={`filters-${index}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div style={{ height: "50vh", width: "100%" }}>
          <Map
            defaultZoom={10}
            defaultCenter={position}
            mapId="4b92fb6b7a73826"
          >
            <AdvancedMarker position={position}></AdvancedMarker>
            <Markers />
            {infoWindowVisible && (
              <InfoWindow
                position={selectedService.coords}
                onClose={() => setInfoWindowVisible(false)}
              >
                <div>
                  <Typography variant="subtitle1">
                    {selectedService.name}
                  </Typography>
                  <Typography variant="body2">
                    {selectedService.address}
                  </Typography>
                  <Typography variant="body2">
                    {selectedService.tags.map((tag, tagIndex) => (
                      <span className="tag" key={`tag-${tagIndex}`}>
                        {tag}
                      </span>
                    ))}
                  </Typography>
                </div>
              </InfoWindow>
            )}
          </Map>
        </div>

        <div className="filter-options">
          <FormControl fullWidth>
            <InputLabel id="community-filter-label">Communities</InputLabel>
            <Select
              labelId="community-filter-label"
              value={selectedCommunity}
              onChange={handleCommunityChange}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="African">Nigeria</MenuItem>
              <MenuItem value="Chinese">China</MenuItem>
              <MenuItem value="Indian">India</MenuItem>
              <MenuItem value="Philippines">Philippines</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="items-container">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Service Name</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Tags</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={3}>Loading...</TableCell>
                  </TableRow>
                ) : (
                  filteredItems.map((item, index) => (
                    <TableRow key={`item-${index}`}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.address}</TableCell>
                      <TableCell>
                        {item.tags.map((tag, tagIndex) => (
                          <span className="tag" key={`tag-${tagIndex}`}>
                            {tag}
                          </span>
                        ))}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </APIProvider>
  );
}

export default ResourceMap;
