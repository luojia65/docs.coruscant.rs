var N=null,E="",T="t",U="u",searchIndex={};
var R=["compression","result","string","from_reader","coruscant_nbt","root_name","value","Serializer","to_writer","to_gzip_writer","to_zlib_writer","to_string_transcript","into_inner","ByteArray","Compound","IntArray","LongArray","to_value","coruscant_nbt::error","try_from","try_into","borrow_mut","coruscant_nbt::root","type_id","coruscant_nbt::ser","coruscant_nbt::value","to_owned","clone_into","borrow","typeid","coruscant_nbt::de","write_compound_tag","write_end_tag","write_byte_tag","write_short_tag","write_int_tag","write_long_tag","write_float_tag","write_double_tag","write_string_tag","write_list_tag","close_list","write_array_head","close_array","write_compound_inner","write_byte_inner","write_short_inner","write_int_inner","write_long_inner","write_float_inner","write_double_inner","write_string_inner","formatter","Deserializer","Formatter","TranscriptFormatter","Compression","BinaryFormatter","from_slice","coruscant_nbt::map","option","default","serialize","from_gzip_reader","from_zlib_reader","Serialize the given data structure with root name as NBT…","Serialize the given data structure with root name as NBT,…","A struct that deserializes NBT into Rust values.","Deserialize an instance of type `T` from an IO stream of…","Deserialize an instance of type `T` from a GZip compressed…","Deserialize an instance of type `T` from a Zlib compressed…","Deserialize an instance of type `T` from an NBT byte slice. ","A structure that serializes Rust values into JSON.","Serialize the given data structure with root name as an…","Convert a T into `coruscant_nbt::Value` which is an enum…","This type represents all possible errors that can occur…","Alias for a `Result` with the error type…","Pair root name and NBT value together, used in parameters…","Represents a NBT key/value type.","Represents any valid NBT value.","deserialize","LevelDat","BossEvent","PlayerUuid","DataPacks","DimensionData","EnderDimensionData","DragonFlight","ExitPortalLocation","Location of the End's exit portal that the ender dragon…","Information about the Minecraft version the world was…"];
searchIndex["coruscant_nbt"]={"doc":E,"i":[[3,R[56],R[4],"When compressing data, the compression level can be…",N,N],[3,"Error",E,R[75],N,N],[3,"Root",E,R[77],N,N],[12,R[5],E,E,0,N],[12,R[6],E,E,0,N],[3,R[7],E,R[72],N,N],[3,R[53],E,R[67],N,N],[3,"Map",E,R[78],N,N],[4,"Value",E,R[79],N,N],[13,"Byte",E,E,1,N],[13,"Short",E,E,1,N],[13,"Int",E,E,1,N],[13,"Long",E,E,1,N],[13,"Float",E,E,1,N],[13,"Double",E,E,1,N],[13,R[13],E,E,1,N],[13,"String",E,E,1,N],[13,"List",E,E,1,N],[13,R[14],E,E,1,N],[13,R[15],E,E,1,N],[13,R[16],E,E,1,N],[5,R[11],E,R[65],N,[[["r"]],[[R[1],[R[2]]],[R[2]]]]],[5,"to_vec",E,R[73],N,[[["r"]],[[R[1],["vec"]],["vec",["u8"]]]]],[5,R[8],E,R[65],N,[[["w"],["r"]],[R[1]]]],[5,R[63],E,R[69],N,[[["r"]],[R[1]]]],[5,R[9],E,R[66],N,[[["w"],[R[0]],["r"]],[R[1]]]],[5,R[64],E,R[70],N,[[["r"]],[R[1]]]],[5,R[10],E,R[66],N,[[["w"],[R[0]],["r"]],[R[1]]]],[5,R[3],E,R[68],N,[[["r"]],[R[1]]]],[5,R[58],E,R[71],N,[[],[R[1]]]],[5,R[17],E,R[74],N,[[[T]],[[R[6]],[R[1],[R[6]]]]]],[0,"de",E,"Deserialize NBT data to a Rust data structure.",N,N],[3,R[53],R[30],R[67],N,N],[5,R[3],E,R[68],N,[[["r"]],[R[1]]]],[5,R[63],E,R[69],N,[[["r"]],[R[1]]]],[5,R[64],E,R[70],N,[[["r"]],[R[1]]]],[5,R[58],E,R[71],N,[[],[R[1]]]],[11,"io",E,"Create a NBT deserializer from an `io::Read`. ",2,[[["r"]],["self"]]],[11,R[12],E,"Unwrap `io::Read` from the NBT deserializer.",2,[[],["r"]]],[11,"slice",E,"Create a NBT deserializer from a `&[u8]`.",2,[[],["self"]]],[11,R[12],E,"Unwrap `&[u8]` from the NBT deserializer.",2,[[]]],[0,"error",R[4],"When serializing or deserializing NBT goes wrong.",N,N],[3,"Error",R[18],R[75],N,N],[6,"Result",E,R[76],N,N],[0,"map",R[4],"A map of `String` to `coruscant_nbt::Value`.",N,N],[3,"Map",R[59],R[78],N,N],[3,"Iter",E,E,N,N],[11,"new",E,"Makes a new empty Map.",3,[[],["self"]]],[11,"with_capacity",E,"Makes a new empty Map with the given initial capacity.",3,[[["usize"]],["self"]]],[11,"len",E,E,3,[[["self"]],["usize"]]],[11,"is_empty",E,E,3,[[["self"]],["bool"]]],[11,"clear",E,E,3,[[["self"]]]],[11,"get",E,E,3,[[["self"],["q"]],[[R[60],[R[6]]],[R[6]]]]],[11,"contains_key",E,E,3,[[["self"],["q"]],["bool"]]],[11,"get_mut",E,E,3,[[["self"],["q"]],[[R[60],[R[6]]],[R[6]]]]],[11,"insert",E,E,3,[[["self"],[R[6]],[R[2]]],[[R[6]],[R[60],[R[6]]]]]],[11,"remove",E,E,3,[[["self"],["q"]],[[R[6]],[R[60],[R[6]]]]]],[11,"iter",E,E,3,[[["self"]],["iter"]]],[0,"root",R[4],"Key-Value pair of NBT data and its root name.",N,N],[3,"Root",R[22],R[77],N,N],[12,R[5],E,E,0,N],[12,R[6],E,E,0,N],[0,"ser",R[4],"Serialize a Rust structure into NBT data.",N,N],[3,R[7],R[24],R[72],N,N],[3,R[57],E,E,N,N],[3,R[55],E,E,N,N],[5,R[8],E,R[65],N,[[["w"],["r"]],[R[1]]]],[5,R[9],E,R[66],N,[[["w"],[R[0]],["r"]],[R[1]]]],[5,R[10],E,R[66],N,[[["w"],[R[0]],["r"]],[R[1]]]],[5,"to_vec",E,R[73],N,[[["r"]],[[R[1],["vec"]],["vec",["u8"]]]]],[5,R[11],E,R[65],N,[[["r"]],[[R[1],[R[2]]],[R[2]]]]],[8,R[54],E,E,N,N],[11,R[31],E,E,4,[[["self"],["w"],["i16"]],[R[1]]]],[11,R[32],E,E,4,[[["self"],["w"]],[R[1]]]],[11,R[33],E,E,4,[[["self"],["i8"],["w"],["i16"]],[R[1]]]],[11,R[34],E,E,4,[[["self"],["w"],["i16"]],[R[1]]]],[11,R[35],E,E,4,[[["self"],["i32"],["w"],["i16"]],[R[1]]]],[11,R[36],E,E,4,[[["self"],["i64"],["w"],["i16"]],[R[1]]]],[11,R[37],E,E,4,[[["self"],["f32"],["w"],["i16"]],[R[1]]]],[11,R[38],E,E,4,[[["self"],["w"],["i16"],["f64"]],[R[1]]]],[11,R[39],E,E,4,[[["self"],["w"],["i16"]],[R[1]]]],[11,R[40],E,E,4,[[["self"],["w"],["i16"],["u8"]],[R[1]]]],[11,R[41],E,E,4,[[["self"],["w"]],[R[1]]]],[11,R[42],E,E,4,[[["self"],["w"],["i16"],["u8"]],[R[1]]]],[11,R[43],E,E,4,[[["self"],["w"]],[R[1]]]],[11,R[44],E,E,4,[[["self"],["w"]],[R[1]]]],[11,R[45],E,E,4,[[["self"],["w"],["i8"]],[R[1]]]],[11,R[46],E,E,4,[[["self"],["w"],["i16"]],[R[1]]]],[11,R[47],E,E,4,[[["self"],["w"],["i32"]],[R[1]]]],[11,R[48],E,E,4,[[["self"],["w"],["i64"]],[R[1]]]],[11,R[49],E,E,4,[[["self"],["w"],["f32"]],[R[1]]]],[11,R[50],E,E,4,[[["self"],["w"],["f64"]],[R[1]]]],[11,R[51],E,E,4,[[["self"],["w"],["i16"]],[R[1]]]],[11,"with_formatter",E,"Creates a new NBT serializer whose output will be written…",5,[[["w"],["f"],["str"]],["self"]]],[11,R[12],E,"Unwrap the `Writer` from the `Serializer`.",5,[[],["w"]]],[11,"binary",E,"Creates a new NBT binary serializer.",5,[[["w"],["str"]],["self"]]],[11,"transcript",E,"Creates a new NBT transcript serializer.",5,[[["w"],["str"]],["self"]]],[11,"new",E,E,6,[[],["self"]]],[11,"with_indent",E,E,6,[[],["self"]]],[0,R[6],R[4],"The Value enum, a loosely typed way of representing any…",N,N],[4,"Value",R[25],R[79],N,N],[13,"Byte",E,E,1,N],[13,"Short",E,E,1,N],[13,"Int",E,E,1,N],[13,"Long",E,E,1,N],[13,"Float",E,E,1,N],[13,"Double",E,E,1,N],[13,R[13],E,E,1,N],[13,"String",E,E,1,N],[13,"List",E,E,1,N],[13,R[14],E,E,1,N],[13,R[15],E,E,1,N],[13,R[16],E,E,1,N],[5,R[17],E,R[74],N,[[[T]],[[R[6]],[R[1],[R[6]]]]]],[0,"as_nbt_array",R[4],"Mark that a field should be serialized as an NBT array…",N,N],[6,"Result",E,R[76],N,N],[11,"from",E,E,7,[[[T]],[T]]],[11,R[26],E,E,7,[[["self"]],[T]]],[11,R[27],E,E,7,[[["self"],[T]]]],[11,"into",E,E,7,[[],[U]]],[11,R[19],E,E,7,[[[U]],[R[1]]]],[11,R[20],E,E,7,[[],[R[1]]]],[11,R[21],E,E,7,[[["self"]],[T]]],[11,R[28],E,E,7,[[["self"]],[T]]],[11,R[23],E,E,7,[[["self"]],[R[29]]]],[11,"from",R[18],E,8,[[[T]],[T]]],[11,"to_string",E,E,8,[[["self"]],[R[2]]]],[11,"into",E,E,8,[[],[U]]],[11,R[19],E,E,8,[[[U]],[R[1]]]],[11,R[20],E,E,8,[[],[R[1]]]],[11,R[21],E,E,8,[[["self"]],[T]]],[11,R[28],E,E,8,[[["self"]],[T]]],[11,R[23],E,E,8,[[["self"]],[R[29]]]],[11,"from",R[22],E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[19],E,E,0,[[[U]],[R[1]]]],[11,R[20],E,E,0,[[],[R[1]]]],[11,R[21],E,E,0,[[["self"]],[T]]],[11,R[28],E,E,0,[[["self"]],[T]]],[11,R[23],E,E,0,[[["self"]],[R[29]]]],[11,"from",R[24],E,5,[[[T]],[T]]],[11,"into",E,E,5,[[],[U]]],[11,R[19],E,E,5,[[[U]],[R[1]]]],[11,R[20],E,E,5,[[],[R[1]]]],[11,R[21],E,E,5,[[["self"]],[T]]],[11,R[28],E,E,5,[[["self"]],[T]]],[11,R[23],E,E,5,[[["self"]],[R[29]]]],[11,"from",R[30],E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[19],E,E,2,[[[U]],[R[1]]]],[11,R[20],E,E,2,[[],[R[1]]]],[11,R[21],E,E,2,[[["self"]],[T]]],[11,R[28],E,E,2,[[["self"]],[T]]],[11,R[23],E,E,2,[[["self"]],[R[29]]]],[11,"from",R[59],E,3,[[[T]],[T]]],[11,R[26],E,E,3,[[["self"]],[T]]],[11,R[27],E,E,3,[[["self"],[T]]]],[11,"into",E,E,3,[[],[U]]],[11,R[19],E,E,3,[[[U]],[R[1]]]],[11,R[20],E,E,3,[[],[R[1]]]],[11,R[21],E,E,3,[[["self"]],[T]]],[11,R[28],E,E,3,[[["self"]],[T]]],[11,R[23],E,E,3,[[["self"]],[R[29]]]],[11,"from",R[25],E,1,[[[T]],[T]]],[11,R[26],E,E,1,[[["self"]],[T]]],[11,R[27],E,E,1,[[["self"],[T]]]],[11,"into",E,E,1,[[],[U]]],[11,R[19],E,E,1,[[[U]],[R[1]]]],[11,R[20],E,E,1,[[],[R[1]]]],[11,R[21],E,E,1,[[["self"]],[T]]],[11,R[28],E,E,1,[[["self"]],[T]]],[11,R[23],E,E,1,[[["self"]],[R[29]]]],[11,"from",R[59],E,9,[[[T]],[T]]],[11,"into_iter",E,E,9,[[],["i"]]],[11,"into",E,E,9,[[],[U]]],[11,R[19],E,E,9,[[[U]],[R[1]]]],[11,R[20],E,E,9,[[],[R[1]]]],[11,R[21],E,E,9,[[["self"]],[T]]],[11,R[28],E,E,9,[[["self"]],[T]]],[11,R[23],E,E,9,[[["self"]],[R[29]]]],[11,"from",R[24],E,10,[[[T]],[T]]],[11,"into",E,E,10,[[],[U]]],[11,R[19],E,E,10,[[[U]],[R[1]]]],[11,R[20],E,E,10,[[],[R[1]]]],[11,R[21],E,E,10,[[["self"]],[T]]],[11,R[28],E,E,10,[[["self"]],[T]]],[11,R[23],E,E,10,[[["self"]],[R[29]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[],[U]]],[11,R[19],E,E,6,[[[U]],[R[1]]]],[11,R[20],E,E,6,[[],[R[1]]]],[11,R[21],E,E,6,[[["self"]],[T]]],[11,R[28],E,E,6,[[["self"]],[T]]],[11,R[23],E,E,6,[[["self"]],[R[29]]]],[11,R[61],R[4],E,7,[[],[R[0]]]],[11,"fmt",E,E,7,[[["self"],[R[52]]],[[R[1],["error"]],["error"]]]],[11,"clone",E,E,7,[[["self"]],[R[0]]]],[11,"eq",E,E,7,[[["self"],[R[0]]],["bool"]]],[11,"ne",E,E,7,[[["self"],[R[0]]],["bool"]]],[11,R[31],R[24],E,6,[[["self"],["w"],["i16"]],[R[1]]]],[11,R[32],E,E,6,[[["self"],["w"]],[R[1]]]],[11,R[33],E,E,6,[[["self"],["i8"],["w"],["i16"]],[R[1]]]],[11,R[34],E,E,6,[[["self"],["w"],["i16"]],[R[1]]]],[11,R[35],E,E,6,[[["self"],["i32"],["w"],["i16"]],[R[1]]]],[11,R[36],E,E,6,[[["self"],["i64"],["w"],["i16"]],[R[1]]]],[11,R[37],E,E,6,[[["self"],["f32"],["w"],["i16"]],[R[1]]]],[11,R[38],E,E,6,[[["self"],["w"],["i16"],["f64"]],[R[1]]]],[11,R[39],E,E,6,[[["self"],["w"],["i16"]],[R[1]]]],[11,R[40],E,E,6,[[["self"],["w"],["i16"],["u8"]],[R[1]]]],[11,R[41],E,E,6,[[["self"],["w"]],[R[1]]]],[11,R[42],E,E,6,[[["self"],["w"],["i16"],["u8"]],[R[1]]]],[11,R[43],E,E,6,[[["self"],["w"]],[R[1]]]],[11,R[44],E,E,6,[[["self"],["w"]],[R[1]]]],[11,R[45],E,E,6,[[["self"],["w"],["i8"]],[R[1]]]],[11,R[46],E,E,6,[[["self"],["w"],["i16"]],[R[1]]]],[11,R[47],E,E,6,[[["self"],["w"],["i32"]],[R[1]]]],[11,R[48],E,E,6,[[["self"],["w"],["i64"]],[R[1]]]],[11,R[49],E,E,6,[[["self"],["w"],["f32"]],[R[1]]]],[11,R[50],E,E,6,[[["self"],["w"],["f64"]],[R[1]]]],[11,R[51],E,E,6,[[["self"],["w"],["i16"]],[R[1]]]],[11,"from",R[18],E,8,[[["error"]],["error"]]],[11,"from",R[22],E,0,[[[T]],["self"]]],[11,"from",E,E,0,[[],["self"]]],[11,"len",R[59],E,9,[[["self"]],["usize"]]],[11,"next_back",E,E,9,[[["self"]],[R[60]]]],[11,"eq",E,E,3,[[["self"],["map"]],["bool"]]],[11,"ne",E,E,3,[[["self"],["map"]],["bool"]]],[11,"eq",R[25],E,1,[[["self"],[R[6]]],["bool"]]],[11,"ne",E,E,1,[[["self"],[R[6]]],["bool"]]],[11,"next",R[59],E,9,[[["self"]],[R[60]]]],[11,"size_hint",E,E,9,[[["self"]]]],[11,"clone",E,E,3,[[["self"]],["map"]]],[11,"clone",R[25],E,1,[[["self"]],[R[6]]]],[11,R[61],R[59],E,3,[[],["self"]]],[11,R[61],R[24],E,6,[[],["self"]]],[11,"fmt",R[18],E,8,[[["self"],[R[52]]],[R[1]]]],[11,"fmt",E,E,8,[[["self"],[R[52]]],[R[1]]]],[11,"fmt",R[59],E,3,[[["self"],[R[52]]],[R[1]]]],[11,"fmt",R[25],E,1,[[["self"],[R[52]]],[R[1]]]],[11,"index",R[59],E,3,[[["self"],["q"]],[R[6]]]],[11,"index_mut",E,E,3,[[["self"],["q"]],[R[6]]]],[11,"custom",R[18],E,8,[[["display"]],["error"]]],[11,R[62],R[59],E,3,[[["self"],["s"]],[R[1]]]],[11,R[62],R[25],E,1,[[["self"],["s"]],[R[1]]]],[11,"custom",R[18],E,8,[[["display"]],["error"]]],[11,"new",R[4],"Creates a new description of the compression level with an…",7,[[["u32"]],[R[0]]]],[11,"none",E,"No compression is to be performed, this may actually…",7,[[],[R[0]]]],[11,"fast",E,"Optimize for the best speed of encoding.",7,[[],[R[0]]]],[11,"best",E,"Optimize for the size of data being encoded.",7,[[],[R[0]]]],[11,"level",E,"Returns an integer representing the compression level,…",7,[[["self"]],["u32"]]]],"p":[[3,"Root"],[4,"Value"],[3,R[53]],[3,"Map"],[8,R[54]],[3,R[7]],[3,R[55]],[3,R[56]],[3,"Error"],[3,"Iter"],[3,R[57]]]};
searchIndex["coruscant_world"]={"doc":"Minecraft World support for the Coruscant engine.","i":[[0,"level_dat","coruscant_world","Level format parsed as serde favored Rust structs.",N,N],[3,R[81],"coruscant_world::level_dat","Root repersentation of `level.dat` file. ",N,N],[12,"data",E,"Contains all the level data.",0,N],[3,"Data",E,"Container for all the level data. ",N,N],[12,"custom_boss_events",E,"A ID/BossEvent collection of bossbars. ID of a bossbar is…",1,N],[12,"data_packs",E,"Options for datapacks. ",1,N],[12,"dimension_data",E,"This tag contains level data specific to certain…",1,N],[12,"version_int",E,"The NBT version of the level, 19133.",1,N],[12,"initialized",E,"Normally true after a world has been initialized properly…",1,N],[12,"level_name",E,"The name of the level.",1,N],[12,"generator_name",E,"The name of the generator; \"default\", \"flat\",…",1,N],[12,"random_seed",E,"The [random level seed] used to generate consistent terrain.",1,N],[12,"map_features",E,"True if the map generator should place structures such as…",1,N],[12,"last_played",E,"The Unix time in milliseconds when the level was last…",1,N],[12,"size_on_disk",E,"The estimated size in bytes of the level. Currently not…",1,N],[12,"allow_commands",E,"True if cheats are enabled.",1,N],[12,"hardcore",E,"True if the player will respawn in Spectator on death in…",1,N],[12,"data_version",E,"An integer displaying the [data version].",1,N],[12,"difficulty",E,"The current difficulty setting. 0 is Peaceful, 1 is Easy,…",1,N],[12,"difficulty_locked",E,"True if the difficulty has been locked. Defaults to false.",1,N],[12,"time",E,"The number of ticks since the start of the level.",1,N],[12,"day_time",E,"The time of day. 0 is sunrise, 6000 is mid day, 12000 is…",1,N],[12,"game_type",E,"The default game mode for the singleplayer player when…",1,N],[12,"spawn_x",E,"The X coordinate of the world spawn.",1,N],[12,"spawn_y",E,"The Y coordinate of the world spawn.",1,N],[12,"spawn_z",E,"The Z coordinate of the world spawn.",1,N],[12,"border_center_x",E,"Center of the world border on the X coordinate. Defaults…",1,N],[12,"border_center_z",E,"Center of the world border on the Z coordinate. Defaults…",1,N],[12,"border_size",E,"Width of the border. Defaults to 60000000.",1,N],[12,"border_safe_zone",E,"Defaults to `5`. // todo: figure out what these are",1,N],[12,"border_warning_blocks",E,"Defaults to `5`.",1,N],[12,"border_warning_time",E,"Defaults to `15`.",1,N],[12,"border_size_lerp_target",E,"Defaults to `60000000`.",1,N],[12,"border_size_lerp_time",E,"Defaults to `0`.",1,N],[12,"border_damage_per_block",E,"Defaults to `0.2`.",1,N],[12,"raining",E,"True if the level is currently experiencing rain, snow,…",1,N],[12,"rain_time",E,"The number of ticks before \"raining\" is toggled and this…",1,N],[12,"thundering",E,"True if the rain/snow/cloud cover is a lightning storm and…",1,N],[12,"thunder_time",E,"The number of ticks before \"thundering\" is toggled and…",1,N],[12,"clear_weather_time",E,"The number of ticks until \"clear weather\" has ended.",1,N],[12,"wandering_trader_id",E,"The UUID of the current wandering trader in the world.",1,N],[12,"wandering_trader_spawn_chance",E,"The current chance of the wandering trader spawning next…",1,N],[12,"wandering_trader_spawn_delay",E,"The amount of ticks until another wandering trader is…",1,N],[12,"version",E,R[90],1,N],[3,R[82],E,"Represents one single bossbar in `CustomBossEvents`.",N,N],[12,"players",E,"A list of players that may see this boss bar. ",2,N],[12,"color",E,"ID of the color of the bossbar. Also sets the color of the…",2,N],[12,"create_world_fog",E,"If the bossbar should create fog.",2,N],[12,"darken_screen",E,"If the bossbar should darken the sky.",2,N],[12,"max_health",E,"The maximum health of the bossbar.",2,N],[12,"cur_health",E,"The current health of the bossbar.",2,N],[12,"name",E,"The display name of the bossbar as a [JSON text component].",2,N],[12,"overlay",E,"The ID of the overlay to be shown over the health bar.…",2,N],[12,"play_boss_music",E,"If the bossbar should initiate boss music.",2,N],[12,"visible",E,"If the bossbar should be visible to the listed players.",2,N],[3,R[83],E,"Uuid of a single player.",N,N],[12,"least",E,"The least significant bits of the player's Universally…",3,N],[12,"most",E,"The most significant bits of the player's Universally…",3,N],[3,R[84],E,"Options for datapacks.",N,N],[12,"disabled",E,"List of disabled datapacks. ",4,N],[12,"enabled",E,"List of enabled datapacks. By default, this is populated…",4,N],[3,R[85],E,"Level data specific to certain dimensions. ",N,N],[12,"the_end",E,"Data for The End ",5,N],[3,R[86],E,"Level data for The End ",N,N],[12,"dragon_flight",E,"Data for the ender dragon fight. Only appears after the…",6,N],[3,R[87],E,"Data for the ender dragon fight. ",N,N],[12,"exit_portal_location",E,R[89],7,N],[12,"gateways",E,"Contains a list of locations of the [End gateway portals]…",7,N],[12,"dragon_killed",E,"If the dragon is currently alive. // todo: true for alive?",7,N],[12,"dragon_uuid_least",E,"The least significant bits of the current Ender Dragon's…",7,N],[12,"dragon_uuid_most",E,"The most significant bits of the current Ender Dragon's…",7,N],[12,"previously_killed",E,"If the ender dragon has ever been defeated. Used to…",7,N],[3,R[88],E,R[89],N,N],[12,"x",E,"The X coordinate of the portal.",8,N],[12,"y",E,"The Y coordinate of the portal.",8,N],[12,"z",E,"The Z coordinate of the portal.",8,N],[3,"Version",E,R[90],N,N],[12,"id",E,E,9,N],[12,"name",E,E,9,N],[12,"snapshot",E,E,9,N],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[19],E,E,0,[[[U]],[R[1]]]],[11,R[20],E,E,0,[[],[R[1]]]],[11,R[21],E,E,0,[[["self"]],[T]]],[11,R[28],E,E,0,[[["self"]],[T]]],[11,R[23],E,E,0,[[["self"]],[R[29]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[19],E,E,1,[[[U]],[R[1]]]],[11,R[20],E,E,1,[[],[R[1]]]],[11,R[21],E,E,1,[[["self"]],[T]]],[11,R[28],E,E,1,[[["self"]],[T]]],[11,R[23],E,E,1,[[["self"]],[R[29]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[19],E,E,2,[[[U]],[R[1]]]],[11,R[20],E,E,2,[[],[R[1]]]],[11,R[21],E,E,2,[[["self"]],[T]]],[11,R[28],E,E,2,[[["self"]],[T]]],[11,R[23],E,E,2,[[["self"]],[R[29]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[19],E,E,3,[[[U]],[R[1]]]],[11,R[20],E,E,3,[[],[R[1]]]],[11,R[21],E,E,3,[[["self"]],[T]]],[11,R[28],E,E,3,[[["self"]],[T]]],[11,R[23],E,E,3,[[["self"]],[R[29]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[19],E,E,4,[[[U]],[R[1]]]],[11,R[20],E,E,4,[[],[R[1]]]],[11,R[21],E,E,4,[[["self"]],[T]]],[11,R[28],E,E,4,[[["self"]],[T]]],[11,R[23],E,E,4,[[["self"]],[R[29]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,"into",E,E,5,[[],[U]]],[11,R[19],E,E,5,[[[U]],[R[1]]]],[11,R[20],E,E,5,[[],[R[1]]]],[11,R[21],E,E,5,[[["self"]],[T]]],[11,R[28],E,E,5,[[["self"]],[T]]],[11,R[23],E,E,5,[[["self"]],[R[29]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[],[U]]],[11,R[19],E,E,6,[[[U]],[R[1]]]],[11,R[20],E,E,6,[[],[R[1]]]],[11,R[21],E,E,6,[[["self"]],[T]]],[11,R[28],E,E,6,[[["self"]],[T]]],[11,R[23],E,E,6,[[["self"]],[R[29]]]],[11,"from",E,E,7,[[[T]],[T]]],[11,"into",E,E,7,[[],[U]]],[11,R[19],E,E,7,[[[U]],[R[1]]]],[11,R[20],E,E,7,[[],[R[1]]]],[11,R[21],E,E,7,[[["self"]],[T]]],[11,R[28],E,E,7,[[["self"]],[T]]],[11,R[23],E,E,7,[[["self"]],[R[29]]]],[11,"from",E,E,8,[[[T]],[T]]],[11,"into",E,E,8,[[],[U]]],[11,R[19],E,E,8,[[[U]],[R[1]]]],[11,R[20],E,E,8,[[],[R[1]]]],[11,R[21],E,E,8,[[["self"]],[T]]],[11,R[28],E,E,8,[[["self"]],[T]]],[11,R[23],E,E,8,[[["self"]],[R[29]]]],[11,"from",E,E,9,[[[T]],[T]]],[11,"into",E,E,9,[[],[U]]],[11,R[19],E,E,9,[[[U]],[R[1]]]],[11,R[20],E,E,9,[[],[R[1]]]],[11,R[21],E,E,9,[[["self"]],[T]]],[11,R[28],E,E,9,[[["self"]],[T]]],[11,R[23],E,E,9,[[["self"]],[R[29]]]],[11,"fmt",E,E,0,[[["self"],[R[52]]],[R[1]]]],[11,"fmt",E,E,1,[[["self"],[R[52]]],[R[1]]]],[11,"fmt",E,E,2,[[["self"],[R[52]]],[R[1]]]],[11,"fmt",E,E,3,[[["self"],[R[52]]],[R[1]]]],[11,"fmt",E,E,4,[[["self"],[R[52]]],[R[1]]]],[11,"fmt",E,E,5,[[["self"],[R[52]]],[R[1]]]],[11,"fmt",E,E,6,[[["self"],[R[52]]],[R[1]]]],[11,"fmt",E,E,7,[[["self"],[R[52]]],[R[1]]]],[11,"fmt",E,E,8,[[["self"],[R[52]]],[R[1]]]],[11,"fmt",E,E,9,[[["self"],[R[52]]],[R[1]]]],[11,R[62],E,E,0,[[["self"],["__s"]],[R[1]]]],[11,R[62],E,E,1,[[["self"],["__s"]],[R[1]]]],[11,R[62],E,E,2,[[["self"],["__s"]],[R[1]]]],[11,R[62],E,E,3,[[["self"],["__s"]],[R[1]]]],[11,R[62],E,E,4,[[["self"],["__s"]],[R[1]]]],[11,R[62],E,E,5,[[["self"],["__s"]],[R[1]]]],[11,R[62],E,E,6,[[["self"],["__s"]],[R[1]]]],[11,R[62],E,E,7,[[["self"],["__s"]],[R[1]]]],[11,R[62],E,E,8,[[["self"],["__s"]],[R[1]]]],[11,R[62],E,E,9,[[["self"],["__s"]],[R[1]]]],[11,R[80],E,E,0,[[["__d"]],[R[1]]]],[11,R[80],E,E,1,[[["__d"]],[R[1]]]],[11,R[80],E,E,2,[[["__d"]],[R[1]]]],[11,R[80],E,E,3,[[["__d"]],[R[1]]]],[11,R[80],E,E,4,[[["__d"]],[R[1]]]],[11,R[80],E,E,5,[[["__d"]],[R[1]]]],[11,R[80],E,E,6,[[["__d"]],[R[1]]]],[11,R[80],E,E,7,[[["__d"]],[R[1]]]],[11,R[80],E,E,8,[[["__d"]],[R[1]]]],[11,R[80],E,E,9,[[["__d"]],[R[1]]]]],"p":[[3,R[81]],[3,"Data"],[3,R[82]],[3,R[83]],[3,R[84]],[3,R[85]],[3,R[86]],[3,R[87]],[3,R[88]],[3,"Version"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);