initSidebarItems({"enum":[["Value","Represents any valid NBT value."]],"fn":[["from_gzip_reader","Deserialize an instance of type `T` from a GZip compressed IO stream of NBT. "],["from_reader","Deserialize an instance of type `T` from an IO stream of NBT. "],["from_slice","Deserialize an instance of type `T` from an NBT byte slice. "],["from_zlib_reader","Deserialize an instance of type `T` from a Zlib compressed IO stream of NBT. "],["to_gzip_writer","Serialize the given data structure with root name as NBT, compress it by GZip, then write into the `std::io` stream."],["to_string_transcript","Serialize the given data structure with root name as NBT string transcript into a `String`."],["to_value","Convert a T into `coruscant_nbt::Value` which is an enum that can represent any valid NBT data."],["to_vec","Serialize the given data structure with root name as an NBT byte vector."],["to_writer","Serialize the given data structure with root name as NBT into the `std::io` stream."],["to_zlib_writer","Serialize the given data structure with root name as NBT, compress it by Zlib, then write into the `std::io` stream."]],"mod":[["as_nbt_array","Mark that a field should be serialized as an NBT array instread of a list of elements."],["de","Deserialize NBT data to a Rust data structure."],["error","When serializing or deserializing NBT goes wrong."],["map","A map of `String` to `coruscant_nbt::Value`."],["root","Key-Value pair of NBT data and its root name."],["ser","Serialize a Rust structure into NBT data."],["value",""]],"struct":[["Compression","When compressing data, the compression level can be specified by a value in this enum."],["Deserializer","A struct that deserializes NBT into Rust values."],["Error","This type represents all possible errors that can occur when serializing or deserializing NBT data."],["Map","Represents a NBT key/value type."],["Root","Pair root name and NBT value together, used in parameters for convenience of `From` and `Into`."],["Serializer","A structure that serializes Rust values into JSON."]],"type":[["Result","Alias for a `Result` with the error type `coruscant_nbt::Error`."]]});