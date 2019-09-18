export default {
    h2o: {
        info: "Water is a transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth's streams, lakes, and oceans, and the fluids of most living organisms. It is vital for all known forms of life, even though it provides no calories or organic nutrients. Its chemical formula is H2O, meaning that each of its molecules contains one oxygen and two hydrogen atoms, connected by covalent bonds.",
        number_mos: 6,
        normal_modes: [1665, 3801, 3914],
        mode_active: [true, true, true],
        point_group: "c2v"
    },
    nh3: {
        info: "Ammonia is a compound of nitrogen and hydrogen with the formula NH3. A stable binary hydride, and the simplest pnictogen hydride, ammonia is a colourless gas with a characteristic pungent smell. It is a common nitrogenous waste, particularly among aquatic organisms, and it contributes significantly to the nutritional needs of terrestrial organisms by serving as a precursor to food and fertilizers.",
        number_mos: 7,
        normal_modes: [1089, 1693, 1693, 3461, 3589, 3589],
        mode_active: [true,true,true,true,true,true],
        point_group: "c3v"
    },
    ch4: {
        info: "Methane (US: /ˈmɛθeɪn/or UK: /ˈmiːθeɪn/) is a chemical compound with the chemical formula CH4 (one atom of carbon and four atoms of hydrogen). It is a group-14 hydride and the simplest alkane, and is the main constituent of natural gas. The relative abundance of methane on Earth makes it an attractive fuel, although capturing and storing it poses challenges due to its gaseous state under normal conditions for temperature and pressure.",
        number_mos: 6,
        normal_modes: [1356, 1356, 1356, 1578, 1578, 3046, 3162, 3162, 3162],
        mode_active: [true, true, true, false, false, false, true, true, true],
        point_group: "td"
    }
};