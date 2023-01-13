


class LegatoNav {
    getNavTheme(){
        let style={
          top: {
          navContainer: {top: "0",
          left: "0",
          flexDirection: "row",
          width: "100%",
          height: "100px",display:"flex", position: "absolute"},
          sectionsContainer: {display:"flex", flexDirection:"column", height:"100%", width:"193px", backgroundColor:"white"},
          sectionOne: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
          sectionTwo: {display:"flex", flexDirection:"column", flex:"auto"},
          sectionThree: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
          sectionFour: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
          sectionFive: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
          logoStyle: {width:"86px"},
          logoWrapper: {width:"100%", height:"100%"},
          linkStyle: {},
          linkWrapper: {},
          profilePicWrapper: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
          profilePicTheme: {fonts: {font1:"Inter"}, fontColors: {color1: "green"}, fontWeight: {bold: "800"}, fontSize: {fontSize1: "11px"}}
          },
          left: {
            navContainer: {top: "0",
            left: "0",
            flexDirection: "column",
            width: "193px",
            height: "100vh", display:"flex", position: "absolute"},
            sectionsContainer: {display:"flex", flexDirection:"column", height:"100%", width:"193px", backgroundColor:"white"},
            sectionOne: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            sectionTwo: {display:"flex", flexDirection:"column", flex:"auto"},
            sectionThree: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            sectionFour: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            sectionFive: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            logoStyle: {width:"86px"},
            logoWrapper: {width:"100%", height:"100%"},
            linkStyle: {},
            linkWrapper: {},
            profilePicWrapper: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            profilePicTheme: {fonts: {font1:"Inter"}, fontColors: {color1: "green"}, fontWeight: {bold: "800"}, fontSize: {fontSize1: "11px"}}
            }
        }
        return style
    }

   
}
export default new LegatoNav();
