import React from 'react';

function Idol({name, picture}) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <img src={picture} alt="레드벨벳"/>
    </div>
  )
}

const Redvelvet = [
  {
    name: "아이린",
    image: "http://cfile262.uf.daum.net/image/219B2B33597CA0FA1D1D55"
  },
  {
    name: "슬기",
    image: "http://t1.daumcdn.net/cafeattach/mEr9/36919e0df169b1276503015a249d3d8bf991d6f5"
  },
  {
    name: "웬디",
    image: "http://t1.daumcdn.net/cafeattach/1WjuI/b1e2943f813debe9a33426e8b879468d48d132a7"
  },
  {
    name: "예리",
    image: "http://cfile300.uf.daum.net/image/998A12415D7CCBC70DCAB6"
  },
  {
    name: "조이",
    image: "https://1.bp.blogspot.com/-XuQDKj89DVo/XqJ50b3LUCI/AAAAAAAAsCg/25_MZPE4NaUvWdl3Twz1yZgfqbZQbzGjgCNcBGAsYHQ/s1600/IMG_4065.GIF"
  }
]

function App() {
  return (
    <div className="App">
      <h1>Hello!!!!!</h1>
      {Redvelvet.map(member => (
          <Idol name={member.name} picture={member.image} />
      ))}
    </div>
  );
}

export default App;
