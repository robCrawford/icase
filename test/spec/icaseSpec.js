describe("Case-insensitive lookups", function(){

	//Set source for key lookups
	var hostData = {
		"Aaa": "xyz",
		"bBb": "Xyz",
		"ccC": "xyZ",
		"1": "77",
		"2": 88,
	};
	icase.setSrc(hostData);

	
	it("Should convert key case", function(){

		expect(icase.lcKeys(hostData)).toEqual({
			aaa: "Aaa",
			bbb: "bBb",
			ccc: "ccC",
			1: "1",
			2: "2"
		})

	});
	
	it("Should match values", function(){

		expect(icase.match( "AAA", "aaa" )).toBe(true);
		expect(icase.match( "aAaAaA", "aaaaaa" )).toBe(true);
		expect(icase.match( " aA ", " Aa " )).toBe(true);
		expect(icase.match( " aa", "aa" )).toBe(false);
		expect(icase.match( "aa", "aa " )).toBe(false);
		expect(icase.match( "a  a", "a a" )).toBe(false);
		expect(icase.match( 12, "12" )).toBe(true);
		expect(icase.match( "12", 12 )).toBe(true);
		expect(icase.match( 12, 12 )).toBe(true);
		expect(icase.match( 0, "0" )).toBe(true);
		expect(icase.match( 0, 0 )).toBe(true);
		expect(icase.match( "", "" )).toBe(true);

		//`undefined` is converted to string "undefined" before comparison
		expect(icase.match( undefined, "undefined" )).toBe(true);
		expect(icase.match( undefined )).toBe(true);
		expect(icase.match( undefined, "" )).toBe(false);
		expect(icase.match( "" )).toBe(false);

	});
	
	it("Should get key and match value", function(){

		expect(icase.match( icase.get("aaa"), "xyz" )).toBe(true);
		expect(icase.match( icase.get("BBB"), "XYZ" )).toBe(true);
		expect(icase.match( icase.get("ccc"), "Xyz" )).toBe(true);
		expect(icase.match( icase.get(1), 77 )).toBe(true);
		expect(icase.match( icase.get(2), "88" )).toBe(true);

	});

})