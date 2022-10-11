const books = [
    {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/91vNnoglNOL._AC_UL254_SR254,254_.jpg",
    title: "Confidence Man: The Making of Donald Trump and the Breaking of America",
    rating: "38",
    price: "$22.40",
    desc: "Praesent vitae metus in mi maximus auctor et ac eros. Vestibulum eu tellus erat. In hac habitasse platea dictumst. Maecenas quis porttitor tortor. Ut ornare leo sapien, aliquet volutpat enim tempor a. Duis eget consequat sem. Quisque et sem vel leo vulputate maximus vitae non dolor. Nulla sed blandit felis. Cras bibendum erat ligula, in tristique felis pharetra nec. Aenean auctor tristique enim, ut pulvinar massa sagittis id. Nam consectetur turpis sed orci commodo, ultricies varius mi tempus. Cras interdum nulla quam, non dignissim felis gravida nec."    
    },

    {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/9193GbyIvxL._AC_UL254_SR254,254_.jpg",
    title: "I'm So Glad You Were Born: Celebrating Who You Are",
    rating: "99",
    price: "$14.99",
    desc: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus nec leo et massa lobortis suscipit. Fusce eget accumsan ex. Etiam lorem ex, dignissim pellentesque risus et, facilisis ultricies odio. Vivamus eget quam ligula. Pellentesque eu augue sem. Etiam in molestie nibh. Morbi et sapien ac justo pharetra tincidunt tempus eu sapien. Pellentesque commodo ex in pharetra egestas. Aliquam mauris odio, pharetra vitae bibendum vitae, laoreet non lacus."    
    },

    {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/711cvCcahjL._AC_UL254_SR254,254_.jpg",
    title: "It Ends with Us: A Novel",
    rating: "171,465",
    price: "$9.99",
    desc: "Pellentesque vitae vestibulum augue. Vestibulum porttitor ultrices fringilla. Proin et risus diam. Curabitur id blandit risus. In vel ipsum sem. Sed ultricies, justo nec vestibulum interdum, purus orci egestas mauris, vitae ornare felis dui et purus. Nullam vulputate vulputate arcu sit amet vehicula. Nulla vitae eleifend ligula. Mauris diam ante, accumsan sed metus vehicula, rutrum interdum nulla. Curabitur est nulla, accumsan in cursus blandit, facilisis nec arcu. Ut eu facilisis purus, in tempor risus."    
    },  

    {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/61tqfa+xbWL._AC_UL254_SR254,254_.jpg",
    title: "Verity",
    rating: "166,586",
    price: "$11.26",
    desc: "Ut tempus non leo sed egestas. Mauris molestie cursus libero ut iaculis. Nunc finibus pellentesque ligula, nec fermentum sapien rhoncus nec. Nunc cursus augue convallis arcu interdum, sit amet pharetra dolor pulvinar. Sed accumsan dolor nec ante pharetra, eget placerat felis elementum. Proin hendrerit nunc id sapien lobortis ultricies. Nam id libero pharetra, porttitor arcu eget, mattis turpis."    
    },

    {
    id: 5,
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL254_SR254,254_.jpg",
    title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    rating: "84,526",
    price: "$11.98",
    desc: "Proin libero nisi, feugiat non egestas eu, convallis a erat. Quisque vel ligula tristique, ullamcorper ante a, tristique odio. Nulla facilisi. Nulla lobortis dui id ante pellentesque placerat. Pellentesque a rutrum lorem. Donec venenatis sapien tortor, nec congue felis condimentum sit amet. Vivamus tellus orci, dictum vitae maximus et, dignissim vel justo. Nunc quis lectus nec ipsum euismod fringilla quis non magna. Nam a euismod enim. Quisque eu erat auctor, pretium ante sed, vulputate diam."    
    },

    {
    id: 6,
    img: "https://images-na.ssl-images-amazon.com/images/I/61NdJMwAThS._AC_UL254_SR254,254_.jpg",
    title: "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",
    rating: "56,205",
    price: "$11.40",
    desc: "Sed ut bibendum metus. Fusce interdum, nisi nec feugiat sagittis, felis sem vulputate lectus, a aliquet ex felis ut arcu. Vestibulum bibendum arcu eget dignissim sodales. Nunc blandit pellentesque massa. Aenean ornare non sem vitae tincidunt. Aliquam et tellus consequat, auctor erat vitae, feugiat diam. Maecenas et pellentesque risus, eget lacinia mi. Maecenas ipsum ex, tristique in luctus id, eleifend tincidunt eros. Vestibulum nisl orci, sagittis eu faucibus a, imperdiet in ipsum. "    
    },

    {
    id: 7,
    img: "https://images-na.ssl-images-amazon.com/images/I/81YlQJgAZSL._AC_UL254_SR254,254_.jpg",
    title: "Live Wire: Long-Winded Short Stories",
    rating: "370",
    price: "$16.49",
    desc: "Fusce feugiat vulputate luctus. In pharetra dui purus, ultricies pellentesque sapien condimentum eget. Aliquam velit ante, gravida quis ante quis, convallis aliquet nunc. Praesent elit tellus, congue vitae nisl at, auctor cursus massa. Vestibulum gravida venenatis elementum. Sed ultrices nec nisi non congue. Integer quis sem leo. Sed quis semper justo, id fringilla urna. Etiam eget laoreet felis, non varius nunc. Nulla urna enim, pretium vel consectetur lobortis, lobortis interdum ex. Nam in sagittis sapien."    
    },

    {
    id: 8,
    img: "https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL127_SR127,127_.jpg",
    title: "The 48 Laws of Power",
    rating: "52,754",
    price: "$11.60",
    desc: "In diam neque, consectetur nec mauris eget, dignissim facilisis purus. Vivamus iaculis lectus turpis, ut ullamcorper velit elementum eget. Quisque bibendum, justo vel consequat suscipit, nisl ligula ultrices nisl, sit amet dapibus erat augue sit amet ex. Vestibulum lacinia consequat tincidunt. Donec congue ligula eget lacinia consectetur. Pellentesque non mauris et tortor cursus ultricies at vel sem. Aenean feugiat, elit eu eleifend mollis, leo lorem aliquam lacus, a mattis dolor velit vitae sem. Donec quis condimentum tortor, quis fermentum ligula."    
    },

    {
    id: 9,
    img: "https://images-na.ssl-images-amazon.com/images/I/61xkvfPVupL._AC_UL127_SR127,127_.jpg",
    title: "November 9: A Novel",
    rating: "38,586",
    price: "$9.99",
    desc: "Curabitur iaculis lorem a sapien commodo, eget cursus sapien laoreet. Suspendisse in bibendum eros, eu dictum est. Sed imperdiet pulvinar mattis. Nunc fermentum faucibus dolor, eget varius eros egestas nec. Nulla rutrum enim malesuada velit maximus dignissim. Quisque gravida, enim vitae rutrum luctus, dui elit pulvinar purus, et tincidunt erat felis nec massa. Praesent bibendum sodales posuere. Etiam non ante vulputate, luctus dui maximus, sagittis nulla. Quisque egestas eros vel neque sodales mattis. "    
    },

    {
    id: 10,
    img: "https://images-na.ssl-images-amazon.com/images/I/611oufwi3YL._AC_UL127_SR127,127_.jpg",
    title: "The Return of the Gods",
    rating: "1,041",
    price: "$17.73",
    desc: "Aenean congue, nulla sed pharetra elementum, odio ante congue sem, in faucibus nibh eros quis neque. Aenean tempor eu arcu ut aliquet. Donec imperdiet aliquet est. Mauris condimentum turpis sed nunc aliquet malesuada. Suspendisse maximus venenatis facilisis. Phasellus sagittis semper ex, a pellentesque tortor consequat lacinia. Cras et massa auctor, mollis metus nec, tincidunt purus. Donec venenatis diam nec leo aliquam rutrum. "    
    },

    {
    id: 11,
    img: "https://images-na.ssl-images-amazon.com/images/I/61dZZdKRjYL._AC_UL127_SR127,127_.jpg",
    title: "If You Want Something Done: Leadership Lessons from Bold Women",
    rating: "1",
    price: "$18.89",
    desc: "Aenean elementum vel tellus sodales ultricies. Mauris at tincidunt velit, at cursus mauris. Suspendisse condimentum eget erat ut egestas. Proin sed tortor bibendum nisi pulvinar vehicula. Vivamus pulvinar lorem arcu, eget auctor augue semper sed. Pellentesque semper, nunc vitae venenatis tincidunt, metus felis lobortis est, at facilisis ante tortor ac turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum pulvinar quis erat placerat gravida. Duis sit amet sapien justo. "    
    },

    {
    id: 12,
    img: "https://images-na.ssl-images-amazon.com/images/I/81dsTaJpn8L._AC_UL127_SR127,127_.jpg",
    title: "Our Missing Hearts: A Novel",
    rating: "12",
    price: "$20.30",
    desc: "Integer auctor, tortor eget sollicitudin posuere, ipsum nunc bibendum purus, ornare mollis felis nibh at enim. Sed posuere dapibus diam, vitae tincidunt dolor congue vel. Sed tellus dui, ornare vitae turpis eu, imperdiet euismod lacus. Aenean porta auctor metus, non feugiat odio scelerisque at. Integer at nibh sed lacus molestie ornare. Cras sit amet justo est. Donec accumsan elementum nibh, ac vestibulum erat sodales in. Nullam malesuada ex mauris."    
    },

    {
    id: 13,
    img: "https://images-na.ssl-images-amazon.com/images/I/81XAArh4pbL._AC_UL127_SR127,127_.jpg",
    title: "Cooking from the Spirit: Easy, Delicious, and Joyful Plant-Based Inspirations",
    rating: "10",
    price: "$19.98",
    desc: "Etiam velit diam, aliquet non feugiat at, venenatis at nisi. Aenean aliquet, purus eu ornare porttitor, velit dolor sollicitudin metus, sed posuere tortor dolor a augue. Sed id vestibulum ante. Phasellus auctor suscipit risus, sed suscipit ipsum suscipit sed. Proin in purus ac mi eleifend dictum ut nec lectus. Aenean pulvinar orci eu justo tempus, vel interdum nulla volutpat. Phasellus quis orci tortor. Praesent ut ipsum ante. Quisque ut congue augue, sed pulvinar tortor."    
    },

    {
    id: 14,
    img: "https://images-na.ssl-images-amazon.com/images/I/61UyYQY7-ZL._AC_UL127_SR127,127_.jpg",
    title: "The Love Prescription: Seven Days to More Intimacy, Connection, and Joy (The Seven Days Series)",
    rating: "9",
    price: "$19.61",
    desc: "Ut urna ex, imperdiet in sodales vel, venenatis et orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam ornare elit sapien, id bibendum tortor eleifend in. Ut non velit augue. Cras est orci, vestibulum eget leo a, rutrum finibus sapien. Sed vitae arcu vel ex aliquam commodo nec sed felis. Nullam gravida rutrum pretium. Morbi neque urna, posuere sit amet vulputate quis, eleifend sit amet sapien. Suspendisse rutrum elit fringilla, pharetra leo non, aliquam felis. Suspendisse at risus neque."    
    },

    {
    id: 15,
    img: "https://images-na.ssl-images-amazon.com/images/I/71RIWM0sv6L._AC_UL254_SR254,254_.jpg",
    title: "Good Inside: A Guide to Becoming the Parent You Want to Be",
    rating: "192",
    price: "$12.99",
    desc: "Donec hendrerit vestibulum pulvinar. Vivamus id auctor nisl, non sodales justo. Morbi eros erat, egestas at ex quis, condimentum sodales neque. Nunc pharetra turpis facilisis, tincidunt massa nec, vestibulum orci. Vivamus viverra porttitor blandit. Nullam sed justo vitae augue tincidunt vestibulum. Pellentesque ultricies dui in tempor pretium. Vestibulum in libero eget dolor pretium accumsan. Aliquam congue vitae tellus nec interdum. Maecenas hendrerit viverra hendrerit."    
    },

    {
    id: 16,
    img: "https://images-na.ssl-images-amazon.com/images/I/61Bdp7XZhDL._AC_UL254_SR254,254_.jpg",
    title: "The Silent Patient",
    rating: "135,824",
    price: "$11.91",
    desc: "Sed a felis nibh. Nulla facilisi. Mauris vel ante vulputate, efficitur nulla sit amet, efficitur enim. Cras interdum mauris quis iaculis efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum nibh et nisl sodales interdum in et justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc augue nibh, viverra a fringilla a, gravida non velit."    
    },

    {
    id: 17,
    img: "https://images-na.ssl-images-amazon.com/images/I/91emRUWl2-L._AC_UL127_SR127,127_.jpg",
    title: "The Whalebone Theatre: A novel",
    rating: "5",
    price: "$24.50",
    desc: "Nunc faucibus nulla eget libero posuere rhoncus. Donec at neque nec dolor sodales facilisis nec sed ligula. Vestibulum elit elit, pharetra sed pellentesque et, congue a mauris. Integer et gravida augue. Aenean vitae elit est. Maecenas interdum odio nisl, eu posuere augue facilisis id. Phasellus in bibendum nisl. Cras feugiat tortor vel felis condimentum, placerat luctus nisl vehicula. Phasellus lacinia ipsum velit, ac varius diam accumsan sed."    
    },

    {
    id: 18,
    img: "https://images-na.ssl-images-amazon.com/images/I/9136kXA1i-L._AC_UL127_SR127,127_.jpg",
    title: "Dreamland: A Novel",
    rating: "2,443",
    price: "$16.40",
    desc: "Cras quis rutrum felis. Suspendisse potenti. Etiam quis laoreet odio, ac lobortis arcu. Nulla molestie pellentesque leo quis suscipit. Nam faucibus scelerisque elit, ac vestibulum urna maximus nec. Aliquam a nibh tincidunt velit maximus tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sed bibendum nulla. Donec in porta est. Quisque eget magna arcu. "    
    }
]

export default books; 