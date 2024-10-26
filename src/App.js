import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Rankings from './pages/Rankings';
import News from './pages/News';
import ArticlePage from './components/ArticlePage';

const Articles =[
  {id: 1, title: "Overwatch League 2024: Season Kickoff", pharagraphs: [
    {
      title:"", 
      text:"Die Overwatch League startet 2024 mit einem Paukenschlag in die neue Saison und verspricht ein aufregendes Jahr voller intensiver Matches und unvorhersehbarer Wendungen. Mit den besten Teams aus der ganzen Welt, die sich um den begehrten Titel messen, bietet die Liga auch in diesem Jahr eine Bühne für fesselnde Spielzüge und beeindruckende Strategien."
    },
    {
      title:"Neue Rivalitäten und spannende Begegnungen", 
      text:"Die Saison beginnt mit hochkarätigen Begegnungen, bei denen sowohl langjährige Rivalen als auch aufstrebende Teams gegeneinander antreten. Die Zuschauer können sich auf packende Kämpfe und einige neue Teamdynamiken freuen, die das ohnehin schon spannende Spiel auf das nächste Level heben. Neben etablierten Favoriten werden auch Neulinge im Rampenlicht stehen und ihre Chance nutzen, sich einen Namen in der Overwatch-Community zu machen."
    },
    {
      title:"Was erwartet die Fans?",
      text:"Die Overwatch League 2024 setzt auf eine immersive Fan-Erfahrung. Neben Live-Übertragungen und Analysen von Experten gibt es zahlreiche Möglichkeiten, über soziale Medien mit den Teams und Spielern zu interagieren und bei spannenden Fan-Events selbst Teil der Liga zu werden. Die Liga hat außerdem einige Überraschungen angekündigt, um die Spannung weiter zu steigern und das Spiel für alte wie neue Fans noch attraktiver zu machen."
    },
    {
      title:"Ein neues Kapitel der Overwatch League",
      text:"Der Auftakt zur Overwatch League 2024 ist nicht nur ein Event, sondern ein Versprechen an die Fans: ein Jahr voller epischer Momente, strategischer Meisterleistungen und emotionaler Höhepunkte. Der Startschuss ist gefallen, und die Teams sind bereit, alles zu geben. Wer wird am Ende den Pokal in die Höhe heben? Das Abenteuer beginnt jetzt."
    }
  ], date: "2024-02-15"},
  {id: 2, title: "New Heroes Coming to Overwatch 2", pharagraphs: [
    {
      title:"",
       text:"Overwatch 2 begrüßt eine aufregende Reihe neuer Helden, die frischen Wind ins Spiel bringen und die Möglichkeiten im Teamkampf erweitern. Mit einzigartigen Fähigkeiten und einer tiefen Hintergrundgeschichte wird jeder dieser Helden zu einer Bereicherung für die Overwatch-Welt und gibt den Spielern noch mehr kreative Ansätze, um den Sieg zu erringen."
      }, 
      {
        title:"Entdecke die neuen Fähigkeiten",
         text:"Die neuen Helden bringen vielseitige Fertigkeiten und Spielstile mit, die sowohl Anfänger als auch erfahrene Spieler herausfordern und belohnen. Von mächtigen Offensivtechniken über innovative Unterstützungsfähigkeiten bis hin zu revolutionären Verteidigungsmechanismen – jeder Held bereichert das Gameplay auf seine ganz eigene Weise. Fans können sich auf packende Taktiken und spannende neue Teamzusammenstellungen freuen, die die Kämpfe dynamischer denn je machen."
        }, 
        {
          title:"Einblick in die Hintergrundgeschichten",
           text:"Jeder Held bringt nicht nur neue Fähigkeiten, sondern auch eine spannende Hintergrundgeschichte mit, die seine Rolle im Overwatch-Universum prägt. Diese Geschichten ermöglichen es Spielern, tief in die Motivationen und Konflikte der Charaktere einzutauchen und ihre Verbindung zur Welt von Overwatch besser zu verstehen. Von geheimnisvollen Vergangenheiten bis hin zu heldenhaften Missionen wird jeder neue Held die Lore um faszinierende Details bereichern."
          }, 
          {
            title:"Bereit für neue Abenteuer?", 
            text:"Mit diesen Neuzugängen entwickelt sich Overwatch 2 ständig weiter und bleibt für die Community spannend und herausfordernd. Die Spieler können sich auf ein dynamischeres Spielerlebnis freuen, das durch die neuen Helden und deren vielseitige Eigenschaften geprägt wird. Das Overwatch-Team hat für die kommenden Monate weitere Überraschungen angekündigt, die das Universum noch weiter ausbauen und für unvergessliche Momente im Spiel sorgen."
          }], date: "2024-03-10"},
  {id: 3, title: "Top Plays from the Last Tournament", pharagraphs: [
    {
      title:"", 
      text:"Das letzte Overwatch-Turnier brachte packende Momente und unglaubliche Spielzüge, die Fans auf der ganzen Welt begeisterten. Mit beeindruckenden Fähigkeiten und taktischer Raffinesse haben die besten Spieler der Liga für unvergessliche Highlights gesorgt. Hier sind die Top Plays, die das Turnier geprägt haben!"
    }, 
    {
      title:"Beeindruckende Ultimates und perfekte Teamkoordination", 
      text:"Einige der besten Szenen des Turniers kamen durch meisterhaft ausgeführte Ultimates zustande. Spieler setzten ihre Fähigkeiten zum genau richtigen Zeitpunkt ein und schafften es, das Blatt selbst in ausweglosen Situationen zu wenden. Die Koordination zwischen den Teammitgliedern war auf einem beeindruckend hohen Niveau, was zu spektakulären Kombos und taktischen Meisterleistungen führte, die Fans jubeln ließen."
    }, 
    {
      title:"Die besten 1v1-Duelle", 
      text:"Das Turnier zeigte auch zahlreiche intensive 1v1-Duelle, bei denen sich einzelne Spieler aus heiklen Situationen befreien und ihre Gegner in letzter Sekunde besiegen konnten. Ob durch flinke Reflexe, präzise Schüsse oder clevere Manöver – diese Spieler haben bewiesen, dass selbst in einem Teamspiel die individuelle Klasse oft den Unterschied macht. Diese spannenden Einzelkämpfe trugen wesentlich zur Dramatik des Turniers bei."
    }, 
    {
      title:"Überragende Strategien und unerwartete Wendungen", 
      text:"Ein Highlight des Turniers waren die strategischen Überraschungen, die einige Teams aus dem Hut zauberten. Mit ungewöhnlichen Heldenwahlen und kreativen Ansätzen überraschten sie ihre Gegner und sorgten für große Begeisterung im Publikum. Diese unerwarteten Wendungen machten das Turnier so besonders und zeigten, dass Overwatch immer noch viel Raum für strategische Innovation bietet."
    },
    {
      title: "Die besten Szenen jetzt ansehen",
      text: "Wer die besten Momente verpasst hat oder die Highlights noch einmal erleben möchte, sollte sich unbedingt die Zusammenfassung anschauen. Die besten Spielzüge des Turniers fassen die Dynamik und die Spannung des Events perfekt zusammen und zeigen, warum Overwatch immer noch eines der aufregendsten Spiele der eSports-Welt ist."
    }], date: "2024-01-20"},
  {id: 4, title: "Patch Notes: Balance Changes", pharagraphs: [
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }], date: "2024-01-25"},
  {id: 5, title: "Interview with Pro Player Backbone", pharagraphs: [
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }], date: "2024-02-05"},
  {id: 6, title: "Overwatch Esport Event Highlights", pharagraphs: [
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }], date: "2024-03-15"},
  {id: 7, title: "Community Tournament Announcement", pharagraphs: [
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }], date: "2024-02-22"},
  {id: 8, title: "Looking Back on History: The 2018 Champions", pharagraphs: [
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }], date: "2024-01-30"},
  {id: 9, title: "Guide to Playing New Heroes", pharagraphs: [
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }, 
    {
      title:"", 
      text:""
    }], date: "2024-03-05"},
]

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/article/1" element={<ArticlePage article={Articles[0]} />}/>
          <Route path="/news/article/2" element={<ArticlePage article={Articles[1]} />}/>
          <Route path="/news/article/3" element={<ArticlePage article={Articles[2]} />}/>
          <Route path="/news/article/4" element={<ArticlePage article={Articles[3]} />}/>
          <Route path="/news/article/5" element={<ArticlePage article={Articles[4]} />}/>
          <Route path="/news/article/6" element={<ArticlePage article={Articles[5]} />}/>
          <Route path="/news/article/7" element={<ArticlePage article={Articles[6]} />}/>
          <Route path="/news/article/8" element={<ArticlePage article={Articles[7]} />}/>
          <Route path="/news/article/9" element={<ArticlePage article={Articles[8]} />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
