/** Original Polish articles imported from the author's public blog on 2026-11-26.
 * Text, publication dates, slugs and tags are preserved. Images are local WebP copies.
 * Only presentation styles and unsafe HTML are removed; asset paths are rewritten.
 * Keep this module independent of browser APIs and Vite aliases: the build reads its slugs.
 */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  originalDate: string;
  category: string;
  tags: readonly string[];
  image: string;
  imageAlt: string;
  sourceUrl: string;
  wordCount: number;
  readingMinutes: number;
  contentHtml: string;
}

export const blogPosts: readonly BlogPost[] = [
  {
    "slug": "stitch-google-ai-design-tool",
    "title": "Stitch od Google: Czy AI zastąpi designerów? Moje pierwsze wrażenia.",
    "excerpt": "Frontend developer, który sam projektuje? Dzisiaj AI zmienia zasady gry. Sprawdzam Stitch – nowe narzędzie od Google do generowania designów.",
    "publishedAt": "2026-04-12",
    "originalDate": "April 12, 2026",
    "category": "AI",
    "tags": [
      "AI",
      "Frontend",
      "WebDesign",
      "Google",
      "WebDevelopment",
      "ArtificialIntelligence",
      "UXUI",
      "Productivity"
    ],
    "image": "assets/blog/stitch-designer-meme.webp",
    "imageAlt": "Stitch od Google: Czy AI zastąpi designerów? Moje pierwsze wrażenia.",
    "sourceUrl": "https://tomaszjader.com/blog/stitch-google-ai-design-tool",
    "wordCount": 145,
    "readingMinutes": 1,
    "contentHtml": "<p>Frontend developer, który sam projektuje? Jeszcze niedawno powiedziałbym: „zapomnij”. Dzisiaj AI zmienia zasady gry.</p>\n        <p>Kolega pokazał mi ostatnio narzędzie od Google (Stitch), które potrafi wygenerować kompletny design strony lub aplikacji na podstawie jednego promptu.</p>\n        <p>Moje pierwsze wrażenia? Jestem oczarowany.</p>\n        <ul>\n            <li><strong>Jakość:</strong> Designy wyglądają naprawdę solidnie.</li>\n            <li><strong>Eksport:</strong> Możliwość pobrania kodu HTML lub plików do Figmy to „game changer”.</li>\n            <li><strong>Dostępność:</strong> Na ten moment narzędzie jest darmowe.</li>\n        </ul>\n        <p>Jako frontendowiec zawsze czułem barierę, gdy nie miałem pod ręką designera. Jeśli nie dostałem gotowego, ładnego UI, trudno było mi „wyczarować” coś estetycznego z głowy. Teraz czuję, że moje możliwości drastycznie wzrosły.</p>\n        <p>W kilka chwil przygotowałem projekty, które wcześniej zajęłyby mi dni. To rozwiązanie, na które czekałem.</p>\n        <p>A Ty jak radzisz sobie z designem w swoich projektach? Korzystasz już z pomocy AI, czy wolisz tradycyjną współpracę z UI Designerem? Daj znać w komentarzu! 👇</p>\n        <p>#AI #Frontend #WebDesign #Google #WebDevelopment #ArtificialIntelligence #UXUI #Productivity</p>"
  },
  {
    "slug": "nauka-slowek-ai-vocabulary-learning-app",
    "title": "Nauka Słówek - AI Vocabulary Learning App: Jak AI zmieniło moją naukę angielskiego 🚀",
    "excerpt": "Kolejna lista słówek do „wykucia” na blachę? Miałem dość. 🥱 Ostatnio zderzyłem się ze ścianą – nauka angielskiego stała się dla mnie po prostu nudna. Zamiast szukać gotowej apki, napisałem własną.",
    "publishedAt": "2026-04-05",
    "originalDate": "April 5, 2026",
    "category": "programowanie",
    "tags": [
      "programowanie",
      "sztucznainteligencja",
      "reactjs",
      "learningenglish",
      "edtech",
      "productivity",
      "opensource",
      "ai",
      "personalbrand"
    ],
    "image": "assets/blog/ai-vocabulary-meme.webp",
    "imageAlt": "Nauka Słówek - AI Vocabulary Learning App: Jak AI zmieniło moją naukę angielskiego 🚀",
    "sourceUrl": "https://tomaszjader.com/blog/nauka-slowek-ai-vocabulary-learning-app",
    "wordCount": 233,
    "readingMinutes": 2,
    "contentHtml": "<p>Kolejna lista słówek do „wykucia” na blachę? Miałem dość. 🥱</p>\n        <p>Ostatnio zderzyłem się ze ścianą – nauka angielskiego stała się dla mnie po prostu nudna. Przerzucanie kart w Anki czy mechaniczne powtarzanie tłumaczeń przestało przynosić efekty. Brakowało mi kontekstu i frajdy.</p>\n        <p>Zamiast jednak szukać kolejnej gotowej apki, postanowiłem... napisać własną, wykorzystując potęgę AI. 🤖</p>\n        <h2>Tak powstała Nauka Słówek - AI Vocabulary Learning App.</h2>\n        <p>Jak to działa? Wpisuję słowa, których chcę się nauczyć, a model GPT-4o-mini generuje dla mnie spójną, angażującą historię. To nie są przypadkowe zdania – to żywy język, w którym moje słówka nabierają znaczenia.</p>\n        <h3>Co udało mi się wdrożyć?</h3>\n        <ul>\n            <li>✨ <strong>Interaktywność:</strong> Klikasz w słowo w tekście i natychmiast widzisz tłumaczenie w animowanym dymku.</li>\n            <li>❓ <strong>Inteligentne Quizy:</strong> AI sama tworzy pytania sprawdzające, czy naprawdę zrozumiałem historię.</li>\n            <li>🎨 <strong>Design:</strong> Postawiłem na nowoczesny Glassmorphism i płynne animacje (Framer Motion).</li>\n            <li>🛡️ <strong>Prywatność:</strong> Klucz API użytkownika jest bezpieczny – przechowywany tylko lokalnie w przeglądarce.</li>\n        </ul>\n        <p>Od pomysłu do działającego narzędzia dzieliło mnie naprawdę niewiele dzięki wsparciu AI. To pokazuje, jak bardzo zmienia się dziś proces tworzenia oprogramowania.</p>\n        <p>Chcesz przetestować? Cały projekt udostępniam jako Open Source. Możesz go pobrać, uruchomić i dostosować pod siebie.</p>\n        <p>👇 Link do repozytorium na GitHubie znajdziesz w pierwszym komentarzu!</p>\n        <img src=\"assets/blog/ai-vocabulary-meme.webp\" alt=\"Meme\">\n        <p>Ciekaw jestem, jak Wy radzicie sobie z nudą podczas nauki? Macie swoje sprawdzone metody czy też wspomagacie się własnymi narzędziami? Dajcie znać w komentarzach! 💬</p>\n        <p>#programowanie #sztucznainteligencja #reactjs #learningenglish #edtech #productivity #opensource #ai #personalbrand</p>"
  },
  {
    "slug": "365-dni-na-zielono-github-streak",
    "title": "365 dni na zielono. Jak rok codziennego kodowania zmienił moje podejście do pracy. 🚀",
    "excerpt": "Dziś jest ten dzień. Mój grid na profilu świeci się w całości na zielono. 🟩 Poznaj lekcje, które wyniosłem z tego wyzwania.",
    "publishedAt": "2026-03-30",
    "originalDate": "March 30, 2026",
    "category": "GitHub",
    "tags": [
      "GitHub",
      "Programming",
      "SoftwareDevelopment",
      "Consistency",
      "GrowthMindset",
      "CodingLife",
      "100DaysOfCode",
      "Programowanie"
    ],
    "image": "assets/blog/github-365-green-streak.webp",
    "imageAlt": "365 dni na zielono. Jak rok codziennego kodowania zmienił moje podejście do pracy. 🚀",
    "sourceUrl": "https://tomaszjader.com/blog/365-dni-na-zielono-github-streak",
    "wordCount": 184,
    "readingMinutes": 1,
    "contentHtml": "<p>365 dni na zielono. Jak rok codziennego kodowania zmienił moje podejście do pracy. 🚀</p>\n        <p>Podejmowałem kilka prób. Raz się nie udało, drugi raz też. Miałem przerwy, ale cel pozostawał ambitny: przez okrągły rok, każdego dnia, wysłać przynajmniej jeden commit na GitHub.</p>\n        <p>Dziś jest ten dzień. Mój grid na profilu świeci się w całości na zielono. 🟩</p>\n        <h2>Czego nauczyło mnie to wyzwanie?</h2>\n        <ul>\n            <li><strong>Dyscyplina ponad motywację:</strong> Nie zawsze mi się chciało. Były wyjazdy, choroby i gorsze dni. Niezależnie od tego, czy był to „świątek, piątek czy niedziela” – kod musiał trafić do repozytorium.</li>\n            <li><strong>Walka z perfekcjonizmem:</strong> Przyznam szczerze – nie każdy commit był przełomowy. Czasami w gorsze dni były to drobne poprawki, byle utrzymać nawyk.</li>\n            <li><strong>Realne efekty:</strong> Dzięki tej regularności stworzyłem ogromną liczbę projektów, którymi dzieliłem się z Wami tutaj na bieżąco.</li>\n        </ul>\n        <p>Jestem z tego wyniku autentycznie dumny. Rzadko udaje się utrzymać taką ciągłość przez 365 dni bez ani jednej przerwy. To wyzwanie pokazało mi, że małe, codzienne kroki prowadzą do ogromnych rezultatów.</p>\n        <p>Dajcie znać w komentarzach – stawiacie na intensywne zrywy pracy czy taką codzienną rutynę? 👇</p>\n        <p>#GitHub #Programming #SoftwareDevelopment #Consistency #GrowthMindset #CodingLife #100DaysOfCode #Programowanie</p>"
  },
  {
    "slug": "skille-w-swiecie-llm-czym-sa-i-jak-je-tworzyc",
    "title": "Skille w Świecie LLM: Czym Są i Jak Je Tworzyć?",
    "excerpt": "Wraz z ewolucją modeli językowych (LLM) z prostych chatbotów w kierunku autonomicznych agentów, pojawiła się potrzeba standaryzacji ich możliwości. Rozwiązaniem tego problemu są Skille (umiejętności) – modułowe, wielorazowe komponenty...",
    "publishedAt": "2026-03-22",
    "originalDate": "March 22, 2026",
    "category": "AI",
    "tags": [
      "AI",
      "LLM",
      "Skills",
      "Agents",
      "Architecture"
    ],
    "image": "assets/blog/llm-skills-blog-cover.webp",
    "imageAlt": "Skille w Świecie LLM: Czym Są i Jak Je Tworzyć?",
    "sourceUrl": "https://tomaszjader.com/blog/skille-w-swiecie-llm-czym-sa-i-jak-je-tworzyc",
    "wordCount": 471,
    "readingMinutes": 3,
    "contentHtml": "<p>Wraz z ewolucją modeli językowych (LLM) z prostych chatbotów w kierunku autonomicznych agentów, pojawiła się potrzeba standaryzacji ich możliwości. Rozwiązaniem tego problemu są <strong>Skille</strong> (umiejętności) – modułowe, wielorazowe komponenty, które pozwalają agentom AI na wykonywanie specjalistycznych zadań w sposób przewidywalny i powtarzalny.</p>\n\n        <h2>Czym właściwie jest \"Skill\"?</h2>\n\n        <p>W tradycyjnym podejściu do LLM, instrukcje przesyłane są w długich, jednorazowych promptach systemowych. Skille zmieniają ten paradygmat. Skill to zamknięta paczka zawierająca:</p>\n        <ul>\n            <li><strong>Instrukcje</strong>: Specyficzne wytyczne dla danego obszaru (np. \"Jak analizować dane sprzedażowe\").</li>\n            <li><strong>Schematy danych</strong>: Definicje struktur, z którymi agent będzie pracował (np. SQL, JSON).</li>\n            <li><strong>Logikę biznesową</strong>: Zasady i polityki, których agent musi przestrzegać.</li>\n            <li><strong>Narzędzia</strong>: Opcjonalnie dodatkowe skrypty lub API, z których agent może korzystać.</li>\n        </ul>\n\n        <h2>Architektura \"Progressive Disclosure\"</h2>\n\n        <p>W dużych systemach agentowych nie jest możliwe (ani efektywne) ładowanie wszystkich instrukcji na raz – zajmowałoby to zbyt dużo miejsca w tzw. oknie kontekstowym (context window) i rozpraszało model. Zamiast tego stosuje się wzorzec <strong>Progresywnego Ujawniania (Progressive Disclosure)</strong>, który widzimy w this projekcie:</p>\n\n        <ol>\n            <li><strong>Middleware (Odkrywanie)</strong>: Agent otrzymuje tylko krótkie opisy dostępnych skilli (np. \"Analiza Sprzedaży\", \"Zarządzanie Zapasami\").</li>\n            <li><strong>On-Demand (Ładowanie na żądanie)</strong>: Dopiero gdy agent uzna, że dany skill jest potrzebny do wykonania zadania użytkownika, używa narzędzia <code>load_skill</code>, aby załadować pełną treść instrukcji.</li>\n        </ol>\n\n        <p>Dzięki temu agent pozostaje \"lekki\" i skoncentrowany, sięgając po wiedzę ekspercką tylko wtedy, gdy jest ona niezbędna.</p>\n\n        <h2>skill.sh – Ekosystem dla Agentów</h2>\n\n        <p>W odpowiedzi na potrzebę standaryzacji powstała inicjatywa <strong><a href=\"https://skill.sh\" target=\"_blank\">skill.sh</a></strong> (często powiązana z <code>agentskills.io</code>). Jest to otwarty katalog i standard tworzenia umiejętności dla agentów AI, wspierany m.in. przez Vercel. Kloczowe cechy tego ekosystemu to:</p>\n        <ul>\n            <li><strong>Repozytorium Umiejętności</strong>: Miejsce, gdzie programiści mogą dzielić się gotowymi skillami (np. do obsługi Stripe, GitHub czy AWS).</li>\n            <li><strong>Standard SKILL.md</strong>: Każdy skill posiada plik dokumentacji, który jest zoptymalizowany pod kątem odczytu przez LLM.</li>\n            <li><strong>Łatwa Instalacja</strong>: Możliwość dodawania skilli do projektu za pomocą prostych komend CLI, np. <code>npx skills add &lt;user/repo&gt;</code>.</li>\n        </ul>\n\n        <h2>Jak stworzyć własnego skilla?</h2>\n\n        <p>Tworzenie skilla w tym projekcie jest bardzo proste i sprowadza się do kilku kroków (pełen kod źródłowy orkiestracji znajdziesz w repozytorium <strong><a href=\"https://github.com/tomaszjader/skills\" target=\"_blank\">tomaszjader/skills</a></strong>):</p>\n\n        <ol>\n            <li><strong>Zdefiniuj Cel</strong>: Zastanów się, w czym Twój agent ma stać się ekspertem.</li>\n            <li><strong>Stwórz plik Markdown</strong>: W folderze <code>skills_data/</code> utwórz nowy plik (np. <code>finanse.md</code>).</li>\n            <li><strong>Napisz Instrukcje</strong>: W treści pliku opisz dokładnie schematy baz danych, reguły biznesowe i kroki, które agent powinien podjąć. Pamiętaj o używaniu jasnych nagłówków – LLM bardzo dobrze radzi sobie ze strukturą Markdown.</li>\n            <li><strong>Dodaj Metadane</strong>: W <code>domain/skills.py</code> dodaj krótki opis nowego skilla, aby middleware mógł go zaproponować agentowi w prompcie systemowym.</li>\n        </ol>\n\n        <h2>Podsumowanie</h2>\n\n        <p>Skille to przyszłość budowania zaawansowanych systemów AI. Pozwalają one na tworzenie agentów, którzy nie tylko \"wiedzą dużo o wszystkim\", ale potrafią stać się precyzyjnymi specjalistami w konkretnych dziedzinach, gdy tylko zajdzie taka potrzeba. Dzięki platformom takim jak <code>skill.sh</code>, budowanie i dzielenie się tymi możliwościami staje się standardem w świecie nowoczesnego programowania AI.</p>"
  },
  {
    "slug": "function-calling-vs-mcp-vs-natywne-narzedzia",
    "title": "Function Calling vs MCP vs Natywne Narzędzia: Jak LLM komunikują się ze światem?",
    "excerpt": "W dzisiejszym świecie rozbudowanych aplikacji opartych o LLM (Large Language Models), same modele generujące tekst to za mało. Aby agenci AI byli naprawdę użyteczni, muszą potrafić wchodzić w interakcje z otaczającym ich światem: systemami plików, API czy bazami danych. Do tego właśnie służy wywoływanie narzędzi (tool calling). W tym artykule przyjrzymy się trzem głównym podejściom do integracji narzędzi z modelami sztucznej inteligencji: Function Calling, protokołowi MCP oraz natywnym narzędziom we frameworkach.",
    "publishedAt": "2026-03-15",
    "originalDate": "March 15, 2026",
    "category": "AI",
    "tags": [
      "AI",
      "LLM",
      "FunctionCalling",
      "MCP",
      "LangChain",
      "Architecture",
      "Integrations"
    ],
    "image": "assets/blog/llm-integrations-mcp-function-calling.webp",
    "imageAlt": "Function Calling vs MCP vs Natywne Narzędzia: Jak LLM komunikują się ze światem?",
    "sourceUrl": "https://tomaszjader.com/blog/function-calling-vs-mcp-vs-natywne-narzedzia",
    "wordCount": 945,
    "readingMinutes": 5,
    "contentHtml": "<p>W dzisiejszym świecie rozbudowanych aplikacji opartych o LLM (Large Language Models), same modele generujące tekst to za mało. Aby agenci AI byli naprawdę użyteczni, muszą potrafić wchodzić w interakcje z otaczającym ich światem: systemami plików, API czy bazami danych. Do tego właśnie służy wywoływanie narzędzi (tool calling).</p>\n\n        <p>W tym artykule przyjrzymy się trzem głównym podejściom do integracji narzędzi z modelami sztucznej inteligencji: <strong>Function Calling</strong>, protokołowi <strong>MCP (Model Context Protocol)</strong> oraz <strong>natywnym narzędziom we frameworkach</strong> takich jak LangChain czy Google Agent Development Kit. Zbadamy ich zalety i podpowiemy, kiedy najlepiej zastosować każde z nich.</p>\n\n        <h2>1. Function Calling: Niskopoziomowy standard branżowy</h2>\n\n        <p>Function Calling to mechanizm wbudowany bezpośrednio w natywne interfejsy API dostawców modeli (np. OpenAI, Anthropic, Gemini). Polega on na dostarczeniu modelowi schematu funkcji (najczęściej jako JSON Schema). Model, zamiast zwracać zwykły tekst odpowiedzi, analizuje polecenie i zwraca ustrukturyzowane informacje (nazwę funkcji i jej optymalne parametry). Zasadniczo model mówi aplikacji: <em>\"Hej, aby to wykonać, powinieneś uruchomić u siebie tę funkcję z takimi argumentami\"</em>. Faktyczne wykonanie kodu leży po stronie Twojej aplikacji.</p>\n\n        <p><strong>Przykład kodu (OpenAI API w Pythonie):</strong></p>\n<pre><code class=\"language-python\">import json\nfrom openai import OpenAI\n\nclient = OpenAI()\n\n# 1. Definicja narzędzia (JSON Schema)\ntools = [\n    {\n        \"type\": \"function\",\n        \"function\": {\n            \"name\": \"get_weather\",\n            \"description\": \"Pobiera aktualną pogodę dla podanego miasta\",\n            \"parameters\": {\n                \"type\": \"object\",\n                \"properties\": {\n                    \"location\": {\"type\": \"string\", \"description\": \"Miasto, np. Warszawa\"},\n                },\n                \"required\": [\"location\"],\n            },\n        }\n    }\n]\n\n# 2. Wywołanie modelu\nresponse = client.chat.completions.create(\n    model=\"gpt-4o\",\n    messages=[{\"role\": \"user\", \"content\": \"Jaka jest pogoda w Krakowie?\"}],\n    tools=tools,\n    tool_choice=\"auto\"\n)\n\n# 3. Model decyduje o wywołaniu funkcji i zwraca argumenty\ntool_call = response.choices[0].message.tool_calls[0]\nprint(f\"Model chce wywołać funkcję: {tool_call.function.name}\")\nprint(f\"Z argumentami: {tool_call.function.arguments}\") \n# Twoja aplikacja teraz wykonuje logikę pod spodem i zwraca wynik modelowi!\n</code></pre>\n\n        <p><strong>Kluczowe zalety Function Calling:</strong></p>\n        <ul>\n            <li><strong>Pełna kontrola:</strong> Masz całkowitą władzę nad logiką wykonania oraz nad tym, co i w jaki sposób dzieje się w Twoim backendzie.</li>\n            <li><strong>Brak zależności trzecich:</strong> Integrujesz się bezpośrednio z API dostawcy LLM, nie narzucając sobie konkretnego frameworka dla architektury agenta.</li>\n            <li><strong>Elastyczność projektowa:</strong> Możesz mapować wywołania LLM na absolutnie wszystko, co tylko da się zapisać przy pomocy kodu aplikacji.</li>\n        </ul>\n\n        <p><strong>Kiedy wybrać Function Calling?</strong><br>\n        To idealne rozwiązanie, gdy masz już własną dojrzałą architekturę backendową, zależy Ci na pełnej kontroli i niezależności, a wdrażane przez Ciebie funkcje są bardzo unikalną, specyficzną logiką biznesową, dla której nie warto wdrażać obcych frameworków.</p>\n\n        <h2>2. MCP (Model Context Protocol): Nowa era standaryzacji</h2>\n\n        <p>MCP to protokół o otwartym kodzie źródłowym, wprowadzony m.in. przez Anthropic, który zmienia podejście do łączenia asystentów AI z naszymi narzędziami. Zamiast pisać własny ruter i system podpinania pojedynczych funkcji pod konkretny wariant integracji z LLM, uruchamiamy tzw. Serwer MCP, który działa jako pomost pomiędzy modelem AI, a źródłem danych czy narzędziem.</p>\n\n        <p><strong>Przykład kodu (Serwer MCP przy użyciu biblioteki FastMCP w Pythonie):</strong></p>\n<pre><code class=\"language-python\">from mcp.server.fastmcp import FastMCP\n\n# Inicjalizacja serwera MCP\nmcp = FastMCP(\"Weather Server\")\n\n# Narzędzie udostępniane przez serwer\n@mcp.tool()\nasync def get_weather_by_city(city: str) -> str:\n    \"\"\"Pobiera informacje o pogodzie dla danego miasta\"\"\"\n    # ... tu następuje wywołanie zewnetrznego API pogodowego ...\n    return f\"Pogoda w {city}: Słonecznie, 22°C\"\n\n# Uruchomienie serwera stdio - teraz każdy klient MCP (np. Claude Desktop) może się połączyć!\nif __name__ == \"__main__\":\n    mcp.run()\n</code></pre>\n\n        <p><strong>Kluczowe zalety MCP:</strong></p>\n        <ul>\n            <li><strong>Raz napisane, używane wszędzie:</strong> Jeśli stworzysz serwer MCP dla danego narzędzia, każdy klient/asystent obsługujący MCP (jak Claude Desktop, Cursor AI, czy frameworki AI) natychmiast potrafi z tymi danymi rozmawiać. Bez pisania tzw. \"kleju\" w kodzie pod klienta.</li>\n            <li><strong>Kwestie bezpieczeństwa:</strong> Model (klient) prosi o dostęp poprzez ustandaryzowany protokół, a serwer MCP utrzymuje kontrolę nad lokalnymi poświadczeniami i bezpieczeństwem infrastruktury.</li>\n        </ul>\n\n        <p><strong>Kiedy MCP jest lepsze od Function Callingu?</strong><br>\n        MCP staje się znacznie lepsze od tradycyjnego Function Calling, gdy chcesz udostępnić te same zaawansowane zasoby wewnątrz firmy (bazy danych, środowiska produkcyjne) dla różnych, niepowiązanych ze sobą aplikacji AI. Stosujesz wtedy jeden, zaufany standard komunikacji zamiast wielokrotnie replikować definicje API dla każdego LLM'a.</p>\n\n        <h2>3. Natywne Narzędzia z Frameworków (LangChain, LlamaIndex)</h2>\n\n        <p>Frameworki do budowania agentów AI oferują kompletnie inną – znacznie wyższą – warstwę abstrakcji. Ekosystemy te podchodzą do spraw inaczej: dostarczają potężne pakiety gotowych klas narzędzi („tools”), z których budowę agenta realizuje się z mniejszym nakładem programistycznym.</p>\n\n        <p><strong>Przykład kodu (Wbudowane narzędzia w bibliotece LangChain):</strong></p>\n<pre><code class=\"language-python\">from langchain_openai import ChatOpenAI\nfrom langchain.agents import load_tools, initialize_agent, AgentType\n\nllm = ChatOpenAI(temperature=0)\n\n# 1. Ładowanie gotowych narzędzi z frameworka (np. Wikipedia i wyszukiwarka)\ntools = load_tools([\"wikipedia\", \"ddg-search\"], llm=llm)\n\n# 2. Inicjalizacja agenta bez ręcznego mapowania schematów\nagent = initialize_agent(\n    tools, \n    llm, \n    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, \n    verbose=True\n)\n\n# 3. Agent sam orkiestruje wywołania narzędzi krok po kroku!\nagent.run(\"Kto zdobył Oscara za najlepszy film w 2024 roku? Użyj Wikipedii lub wyszukiwarki.\")\n</code></pre>\n\n        <p><strong>Kluczowe zalety natywnych narzędzi:</strong></p>\n        <ul>\n            <li><strong>\"Gotowce\" zamiast pisania od nowa:</strong> Czekają tam na nas setki integracji, np.: Google Search, uruchamianie skryptów Python, środowiska Docker, powiązania z SQL itp.</li>\n            <li><strong>Szybkie prototypowanie (Rapid Development):</strong> Kod wymagany do podpięcia np. wyszukiwarki zajmuje dwie linijki. Framework sam przetłumaczy definicję dla LLM i wymusi poprawny Function Calling pod spodem warstwy abstrakcji.</li>\n            <li><strong>Wbudowana orkiestracja:</strong> Od razu pracujesz w architekturze zdolnej do dynamicznego planowania kroków (np. ReAct/Tool Calling Agent). Ekosystem zapewnia pamięć agentowi potrzebną mu do pętli decyzyjnej.</li>\n        </ul>\n\n        <p><strong>Kiedy natywne narzędzia we frameworkach wypadają najlepiej?</strong><br>\n        Są poszukiwaną opcją, gdy potrzebujesz bardzo szybkiego wdrożenia zaawansowanego agenta w oparciu o popularne procesy: RAG, web-scraping czy wyszukiwanie w internecie. Wykorzystanie np. LangChain zapobiega odkrywaniu koła na nowo gdy chcemy ułożyć proste \"klocki Lego\" logicznie ze sobą w całość.</p>\n\n        <hr>\n\n        <h3>Podsumowanie na szybko:</h3>\n        <ul>\n            <li>Chcesz zbudować solidny, zoptymalizowany kod i masz absolutną kontrolę nad wykonaniem logiki API? Wybierz <strong>Function Calling</strong>.</li>\n            <li>Potrzebujesz standaryzowanej, uniwersalnej metody na wystawienie Twojego lokalnego środowiska lub systemów dla różnorodnych asystentów zewnętrznych (desktopowych i IDE)? Stwórz <strong>Serwer MCP</strong>.</li>\n            <li>Twoim głównym celem jest zbudowanie Agenta korzystającego z gotowych narzędzi (Wikipedia, Scrapery, Bazy Wejktorowe) w kilka minut bez pisania implementacji logiki pętli orkiestracji? Użyj <strong>Frameworków takich jak LangChain</strong>.</li>\n        </ul>"
  },
  {
    "slug": "kompletny-przewodnik-po-serwerach-mcp-model-context-protocol",
    "title": "Kompletny Przewodnik po Serwerach MCP (Model Context Protocol)",
    "excerpt": "W dobie dynamicznego rozwoju sztucznej inteligencji, jednym z największych wyzwań jest łączenie modeli językowych (LLM) z zewnętrznymi danymi i narzędziami. Odpowiedzią na to wyzwanie jest wchodzący na salony MCP (Model Context Protocol).",
    "publishedAt": "2026-03-08",
    "originalDate": "March 8, 2026",
    "category": "AI",
    "tags": [
      "AI",
      "SystemArchitecture",
      "MCP",
      "LLM",
      "Python",
      "Integrations"
    ],
    "image": "assets/blog/mcp-servers-guide.webp",
    "imageAlt": "Kompletny Przewodnik po Serwerach MCP (Model Context Protocol)",
    "sourceUrl": "https://tomaszjader.com/blog/kompletny-przewodnik-po-serwerach-mcp-model-context-protocol",
    "wordCount": 1549,
    "readingMinutes": 8,
    "contentHtml": "<p>W dobie dynamicznego rozwoju sztucznej inteligencji, jednym z największych wyzwań jest łączenie modeli językowych (LLM) z zewnętrznymi danymi i narzędziami. Odpowiedzią na to wyzwanie jest <strong>MCP (Model Context Protocol)</strong>. W tym artykule przyjrzymy się bliżej, czym jest MCP, jak z niego korzystać oraz jakie są kluczowe różnice między tradycyjnym podejściem a tym nowym standardem.</p>\n\n        <h2>Co to jest MCP?</h2>\n\n        <p><strong>Model Context Protocol (MCP)</strong> to otwarty standard opracowany w celu bezpiecznego i ujednoliczonego łączenia inteligentnych asystentów AI z zewnętrznymi źródłami danych i narzędziami. Pozwala on modelom językowym na dynamiczne odkrywanie i używanie funkcji we współpracujących aplikacjach w zautomatyzowany i przewidywalny sposób.</p>\n\n        <p>Architektura MCP zazwyczaj obejmuje role:</p>\n        <ul>\n            <li><strong>Klienci (MCP Clients)</strong>: Aplikacje (np. Claude Desktop, Cursor, czy terminale ułatwiające dostęp do AI), w których użytkownik prowadzi konwersację z modelem LLM. Klient inicjuje komunikację, wysyłając zapytania – to na nim spada obowiązek uwzględniania i zaprezentowania modelowi dostępnych zasobów i narzędzi.</li>\n            <li><strong>Serwery (MCP Servers)</strong>: Lekkie, uniwersalne węzły integracyjne dostarczające konkretne możliwości (np. odczyt baz danych, sprawdzanie pogody, interakcja z API).</li>\n        </ul>\n\n        <h2>Różnica między lokalnym Klientem MCP a Serwerem MCP</h2>\n\n        <p>W środowisku MCP funkcjonują pojęcia klientów i serwerów. Należy tu rozróżnić dwie główne perspektywy:</p>\n\n        <ol>\n            <li><strong>Lokalny Klient MCP (Local MCP Host)</strong>:<br> To aplikacja na komputerze użytkownika (np. aplikacja desktopowa Claude, Cursor, rozszerzenia do IDE), z którą użytkownik wchodzi w bezpośrednią interakcję. Pełni ona rolę mostu – pośredniczy w wysyłaniu zapytań (do modelu LLM w chmurze lub lokalnie) oraz dba o wywoływanie narzędzi w ramach otrzymanego planu działania. Klient lokalny uruchamia swoje połączenia z jednym lub wieloma serwerami MCP.</li>\n            <li><strong>Serwer MCP</strong>:<br> To program, posiadający dostęp do Twoich lokalnych stref bezpieczeństwa (np. systemu plików) bądź zewnętrznych usług IT. Zadaniem serwera jest \"wystawienie\" tych narzędzi do dyspozycji Klienta w ustandaryzowany sposób. Serwery działają najczęściej lokalnie z klientem (wówczas wymieniają paczki danych przez strumienie systemowe <code>stdio</code>), ale mogą też być hostowane zdalnie (używając zazwyczaj technologii komunikacyjnych zbliżonych do HTTP – na przykład Server-Sent Events).</li>\n        </ol>\n\n        <h2>Czym różni się Serwer MCP od standardowego REST API?</h2>\n\n        <p>Początkujący programiści często zadają pytanie: <em>„Mamy już protokół HTTP i REST API – dlaczego powstało MCP?”</em> Głębokie różnice stają się widoczne, jeśli spojrzymy na filozofię samego dostępu:</p>\n\n        <table class=\"table table-bordered my-4 text-white\">\n            <thead class=\"bg-dark\">\n                <tr>\n                    <th>Cecha</th>\n                    <th>REST API</th>\n                    <th>Serwer MCP</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td><strong>Przeznaczenie i Interakcja</strong></td>\n                    <td>Komunikacja ogólnego przeznaczenia (front-end z back-endem, maszyna z maszyną). Wymaga jawnego instruowania (kodowania).</td>\n                    <td>Komunikacja \"AI do narzędzia\". Zoptymalizowane specjalnie pod kątem samodzielnej nawigacji modeli LLM.</td>\n                </tr>\n                <tr>\n                    <td><strong>Odkrywalność (Discovery)</strong></td>\n                    <td>Wymaga specyfikacji (jak Swagger, OpenAPI), których przegląd nie jest naturalną pętlą wykonawczą.</td>\n                    <td>Model językowy dostaje gotowe listy w ustandaryzowanych schematach JSON. Klient AI odpytuje serwer: \"pokaż mi co masz w ofercie i czego potrzebujesz argumentem\".</td>\n                </tr>\n                <tr>\n                    <td><strong>Mechanizm Transportu</strong></td>\n                    <td>Bazuje na HTTP/HTTPS. Aby wystawić usługę, zazwyczaj używamy portów sieciowych, co napotyka problemy z zaporami sieciowymi.</td>\n                    <td>MCP domyślnie opiera swoją wymianę przy użyciu strumieni <code>stdio</code> (Standard I/O). Odpalamy lokalną usługę tak jak wykonanie lokalnego programu, obchodząc ewentualne zapory. Zdalne połączenie jest oparte o SSE z żądaniami POST, zaprojektowane specjalnie dla protokołu JSON-RPC.</td>\n                </tr>\n                <tr>\n                    <td><strong>Elastyczność Zestawu Danych</strong></td>\n                    <td>Czyste wywołania i odpowiedzi.</td>\n                    <td>Serwer MCP domyślnie kategoryzuje swoją ofertę na \"Zasoby\", \"Narzędzia\" i \"Prompty\" (czytaj więcej w dalszej części).</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <h2>Inne kluczowe standardy ujęte w ekosystemie MCP</h2>\n\n        <p>Dobry przewodnik po MCP wyróżnia trzy podstawowe \"prymitywy\" (tzw. building blocks), które Serwer dostarcza Agentowi (Modelowi AI):</p>\n\n        <ol>\n            <li><strong>Zasoby (Resources)</strong>: Podobne do plików na wirtualnym dysku działające w trybie \"tylko odczytu\". Pozwalają serwerowi udostępnić dane do kontekstu modelu w formie ścieżek URI, np. wpisy z logów, schematy bazy danych, połączone notatki czy dokumentacja.</li>\n            <li><strong>Narzędzia (Tools)</strong>: Najważniejsze elementy wykonywalne. Są to po prostu funkcje, za pomocą których model LLM może podjąć działania (np. wysłanie e-maila, usunięcie pliku lub integracja z zaawansowanym API zewnętrznym jak pogoda). Tylko używając narzędzi, sztuczna inteligencja zyskuje sprawczość wykraczającą poza udzielanie statycznych odpowiedzi.</li>\n            <li><strong>Szablony Promptów (Prompts)</strong>: Serwer MCP może dostarczać interaktywne szablony, z których mogą skorzystać np. ustandaryzowane menu klientów w interfejsach graficznych. Te predefiniowane środowiska pozwalają asystentom wiedzieć \"gdzie zacząć\", gdy weryfikują konkretne zestawy logów, czy tworzą PR-y o ustandaryzowanej procedurze oceny.</li>\n        </ol>\n\n        <p>Drugim nieodłącznym elementem z zakresu wiedzy MCP staje się <strong>Bezpieczeństwo (Security &amp; Sandboxing)</strong>. Standaryzacja wymusza zasadę <strong>opt-in</strong> przy korzystaniu z narzędzi o potencjalnych zjawiskach destrukcyjnych lub operacjach wysłania zapytania na zewnątrz do API (serwer pyta użytkownika klienta, czy autoryzuje on wywołanie narzedzia przez bota).</p>\n\n        <h2>Przykład w praktyce: Serwer dostarczający informacje o pogodzie</h2>\n\n        <p>Aby unaocznić strukturę, weźmy uproszczony kod źródłowy serwera w języku Python. Demonstruje on serce podejścia do narzędzi, używając popularnej bilbioteki <code>FastMCP</code> (opartej zresztą na frameworku <code>FastAPI</code> lub bliźniaczych rozwiązaniach):</p>\n\n<pre><code class=\"language-python\">from mcp.server.fastmcp import FastMCP\nimport httpx\n\n# 1. Inicjalizacja serwera - określenie nazwy usługi.\nmcp = FastMCP(\"Weather\")\n\n# 2. Definiowanie narzędzia MCP:\n# Dekorator @mcp.tool() konwertuje typową funkcję Pythona na funkcjonalne narzędzie dla Modelu Językowego.\n@mcp.tool()\nasync def get_weather(latitude: float, longitude: float) -> str:\n    \"\"\"\n    Pobiera aktualną pogodę na podstawie szerokości i długości geograficznej.\n    LLM używa tego opisu by zdecydować kiedy użyć narzędzia.\n    \"\"\"\n    url = f\"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current=temperature_2m,wind_speed_10m\"\n    \n    async with httpx.AsyncClient() as client:\n        response = await client.get(url)\n        response.raise_for_status()\n        data = response.json()\n        \n        current = data.get(\"current\", {})\n        temp = current.get(\"temperature_2m\", \"brak danych\")\n        wind = current.get(\"wind_speed_10m\", \"brak danych\")\n        \n        return f\"Temperatura: {temp}°C, Prędkość wiatru: {wind} km/h\"\n\n# 3. Uruchamianie bramy komunikacyjnej\nif __name__ == \"__main__\":\n    mcp.run() # Serwer oczekuje na zapytania w kanale I/O (stdio)\n</code></pre>\n\n        <p>Warto zwrócić uwagę na kluczowe elementy:</p>\n        <ul>\n            <li>Przekazane tu <code>dockstringi</code> (<code>\"\"\"Pobiera aktualną pogodę...\"\"\"</code>) oraz pełne typowanie argumentów wejściowych (<code>latitude: float</code>) są traktowane na wagę złota. Posłużą one klientowi do zaprezentowania tych definicji AI – stając się swoistą instrukcją obsługi narzędzia \"kiedy go użyć i jakie warunki musi spełniać argument\".</li>\n            <li>Od strony programistycznej odpada nam ręczne parsowanie formatów JSON – implementator (framework powiązany z MCP) martwi się całą brudną robotą związaną z komunikacją i błędami, mapując to po prostu do typowanych argumentów funkcji języka, w którym programujesz.</li>\n        </ul>\n\n        <h2>Porównanie: Narzędzia MCP a Narzędzia w frameworkach LangChain / Google Agent SDK</h2>\n\n        <p>Wielu programistów pracujących z modelami językowymi spotkało się już z pojęciem \"narzędzi\" (Tools) w frameworkach aplikacyjnych, takich jak <strong>LangChain</strong> czy <strong>Google Agent SDK</strong>. Mimo że w obu tych przypadkach główny cel jest ten sam – wyposażenie asystenta AI w zdolność działania w realnym świecie – podejście i architektura zasadniczo się od siebie różnią.</p>\n\n        <h3>Cechy wspólne</h3>\n        <ol>\n            <li><strong>Cel operacyjny:</strong> Obie koncepcje mają udostępnić modelowi (LLM) możliwość działania, a nie tylko generowania tekstu. Np. przeszukiwanie bazy danych, czytanie plików, modyfikację systemów zewnętrznych.</li>\n            <li><strong>Mechanizm sterowania:</strong> Model otrzymuje do dyspozycji interfejsy narzędzi w postaci opisu tekstowego (tzw. <em>docstring</em>) oraz ustandaryzowanego formatu wejścia (schematu w formacie JSON Schema). Na tej podstawie AI samo weryfikuje, kiedy należy zawołać narzędzie.</li>\n            <li><strong>Funkcjonalność pod spodem:</strong> To Ty określasz, co robi dany kawałek kodu (piszesz rzeczywistą funkcję do pobierania pogody czy wsadzania rzędu do bazy).</li>\n        </ol>\n\n        <h3>Kluczowe różnice</h3>\n\n        <table class=\"table table-bordered my-4 text-white\">\n            <thead class=\"bg-dark\">\n                <tr>\n                    <th>Cecha</th>\n                    <th>Narzędzia LangChain / Google Agent SDK</th>\n                    <th>Narzędzia protokołu MCP (Serwery)</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td><strong>Integracja</strong></td>\n                    <td>Silnie sprzężone z kodem w logice Twojego agenta. Narzędzie, skrypt i LLM dzielą przeważnie to samo środowisko (jeden połączony proces i jeden język programowania np. Python).</td>\n                    <td>Narzędzia działają jako odosobnione serwery mikrousługowe, oddzielone twardo od samego klienta, środowiska, a nawet języka programowania. Serwer np. w Pythonie i klient agentowy chociażby w Typescript uruchomiony na innej maszynie.</td>\n                </tr>\n                <tr>\n                    <td><strong>Skalowalność i Przenośność</strong></td>\n                    <td>Aby przenieść narzędzie z LangChain np. do Google Agent SDK, trzeba zazwyczaj tworzyć wrappery, adaptery lub przepisać znaczną część interfejsów połączeniowych od zera.</td>\n                    <td>Prawdziwe rozwiązanie \"Włącz i korzystaj\" (Plug &amp; Play). Wyobraź sobie, że piszesz jedno narzędzie w serwerze MCP – może ono zostać pobrane jako gotowa wtyczka i natychmiast zadziała w Cursos, Claude, Agent SDK (obsługującym protokół) czy własnej aplikacji w dowolnej technologii – bez zmiany kodu operacyjnego narzędzia.</td>\n                </tr>\n                <tr>\n                    <td><strong>Role systemowe</strong></td>\n                    <td>Wewnątrz skryptu modelu językowego (funkcja natywna).</td>\n                    <td>Protokół klient-serwer na bazie formatu JSON-RPC (przez SSE czy też strumienie <em>stdio</em>).</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <h3>Przykłady</h3>\n\n        <p>Przyjrzyjmy się, jak implementacja w modelu LangChain (czy jemu podobnym) różniłaby się na tle podejścia z użyciem MCP.</p>\n\n        <p><strong>Podejście klasyczne – LangChain w kodzie aplikacji agentowej:</strong><br>\n        Wywołanie narzędzia jest ścisłą połączoną częścią inicjalizacji całego potoku modelu LLM.</p>\n<pre><code class=\"language-python\">from langchain.tools import tool\nfrom langchain.agents import initialize_agent, AgentType\n\n# 1. Definicja narzędzia ściśle w kodzie LangChain\n@tool\ndef get_weather(latitude: float, longitude: float) -> str:\n    \"\"\"Pobiera aktualną pogodę na podstawie szerokości i długości geograficznej.\"\"\"\n    # (Tutaj ukryta jest implementacja wywołania np. Requesta HTTP)\n    return \"20°C\"\n\n# 2. Narzędzie jest mocno powiązane z agentem i modelem językowym w jednym potoku wykonawczym Python.\nagent = initialize_agent([get_weather], llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION)\n</code></pre>\n\n        <p><strong>Podejście MCP – Rozdzielenie warstw (Własna funkcja klienta udostępnia logikę serwera):</strong><br>\n        W architekturze MCP narzędzie działa na swoim serwerze (tak jak widziałeś uprzednio we własnym pliku <code>weather_mcp.py</code> w frameworku <strong>FastMCP</strong>). Aplikacja nie musi znać wewnętrznego kodu wywołań. Klienci komunikują mechanizm dostępu, wysyłając zapytanie o całą pulę ofert serwera poprzez czysty format wiadomości:</p>\n\n        <p><strong>Zapytanie od lokalnego agenta klienta do serwera MCP (często na niewidocznym dla programisty kanale transakcyjnym I/O):</strong></p>\n<pre><code class=\"language-json\">{\n  \"jsonrpc\": \"2.0\",\n  \"method\": \"tools/list\",\n  \"id\": 1,\n  \"params\": {}\n}\n</code></pre>\n\n        <p>Serwer po prostu oddaje manifest narzędzia jako abstrakcyjny obiekt, a do lokalnego agenta przypinamy po prostu samą nazwę programu bądź komendę uruchomieniową w configu – reszta procesu i protokołowanie dzieje się sama w pełni zautomatyzowanie, dając modelowi LLM kontrolę.<br>\n        MCP przesuwa tym samym koncepcję narzędzi w agentach AI od \"zintegrowanych lokalnych instrukcji\" do otwartych standardów oddzielnych \"klocków\" na podobieństwo usług internetowych.</p>\n\n        <h2>Podsumowanie</h2>\n\n        <p>Możliwość zintegrowania każdego repozytorium systemowego i skryptu operacyjnego bezpośrednio pod naturalne zjawiska i interfejsy AI otwiera ogromne pole potencjału na automatyzację pracy. Model Context Protocol porządkuje ten dynamiczny obszar integracji, pozwalając na płynną, szybką analizę Twojego środowiska czy usług i oddzielając silnik asystenta od fizycznych barier wykonawczych. Ustanawia nowy most pomiędzy narzędziami (Tools) frameworków z przeszłości i przyszłości.</p>"
  },
  {
    "slug": "context-engineering-w-praktyce-agenty-llm",
    "title": "Context engineering w praktyce: jak budować agentów LLM bez przepełniania kontekstu",
    "excerpt": "Modele językowe, takie jak GPT-4, nie „rozumieją” świata. Przewidują kolejne tokeny na podstawie danych, które dostają w kontekście. Dlatego w systemach produkcyjnych nie wygrywa ten, kto napisze najładniejszy prompt. Wygrywa ten, kto najlepiej zaprojektuje całe środowisko informacyjne modelu.",
    "publishedAt": "2026-03-01",
    "originalDate": "March 1, 2026",
    "category": "AI",
    "tags": [
      "AI",
      "ContextEngineering",
      "LLM",
      "LangChain",
      "AgentArchitecture",
      "Python",
      "RAG"
    ],
    "image": "assets/blog/context_engineering_llm_agents.webp",
    "imageAlt": "Context engineering w praktyce: jak budować agentów LLM bez przepełniania kontekstu",
    "sourceUrl": "https://tomaszjader.com/blog/context-engineering-w-praktyce-agenty-llm",
    "wordCount": 763,
    "readingMinutes": 4,
    "contentHtml": "<p>Modele językowe, takie jak GPT-4, nie „rozumieją” świata. Przewidują kolejne tokeny na podstawie danych, które dostają w kontekście.</p>\n\n        <p>Dlatego w systemach produkcyjnych nie wygrywa ten, kto napisze najładniejszy prompt. Wygrywa ten, kto najlepiej zaprojektuje całe środowisko informacyjne modelu.</p>\n\n        <p>Tym właśnie jest context engineering.</p>\n\n        <p>W tym artykule:</p>\n        <ul>\n            <li>wyjaśnię, czym naprawdę jest context engineering,</li>\n            <li>pokażę problem przepełnienia kontekstu w agentach,</li>\n            <li>przejdziemy krok po kroku przez architekturę rozwiązania,</li>\n            <li>zbudujemy działający przykład w Pythonie,</li>\n            <li>podzielimy kod na fragmenty i omówimy każdy z nich.</li>\n        </ul>\n\n        <p><strong>Framework użyty w przykładzie:</strong> LangChain</p>\n\n        <h3>Czym jest context engineering?</h3>\n\n        <p>Context engineering to świadome projektowanie i kontrolowanie wszystkiego, co trafia do okna kontekstowego modelu:</p>\n        <ul>\n            <li>promptu,</li>\n            <li>instrukcji systemowych,</li>\n            <li>historii rozmowy,</li>\n            <li>dokumentów (RAG),</li>\n            <li>wyników narzędzi,</li>\n            <li>formatu odpowiedzi,</li>\n            <li>ograniczeń.</li>\n        </ul>\n\n        <p>Model działa wyłącznie na tym, co znajduje się w aktualnym kontekście.<br>Nie ma pamięci w klasycznym sensie.</p>\n\n        <h4>Prompt engineering vs context engineering</h4>\n        <table class=\"table table-bordered my-4 text-white\">\n            <thead class=\"bg-dark\">\n                <tr>\n                    <th>Prompt engineering</th>\n                    <th>Context engineering</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>Optymalizuje pojedynczy prompt</td>\n                    <td>Projektuje cały system</td>\n                </tr>\n                <tr>\n                    <td>Skupia się na treści zapytania</td>\n                    <td>Zarządza całym wejściem modelu</td>\n                </tr>\n                <tr>\n                    <td>Często manualne</td>\n                    <td>Często architektoniczne</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <p>Context engineering to projektowanie architektury, nie tylko tekstu.</p>\n\n        <h3>Problem: przepełnienie kontekstu w agentach</h3>\n\n        <p>W systemach agentowych:</p>\n        <ul>\n            <li>model planuje,</li>\n            <li>wykonuje kroki,</li>\n            <li>wywołuje narzędzia,</li>\n            <li>analizuje wyniki,</li>\n            <li>zapisuje historię.</li>\n        </ul>\n\n        <p>Każdy krok zwiększa liczbę tokenów.<br>Po kilkunastu iteracjach:</p>\n        <ul>\n            <li>rosną koszty,</li>\n            <li>spada jakość,</li>\n            <li>przekraczamy limit kontekstu.</li>\n        </ul>\n\n        <p><strong>Kluczowa zasada:</strong><br>Model nie potrzebuje historii. Potrzebuje aktualnego stanu.</p>\n\n        <h3>Architektura rozwiązania</h3>\n\n        <p>Zamiast przekazywać całą historię, budujemy system z:</p>\n        <ul>\n            <li>plannerem,</li>\n            <li>executorem,</li>\n            <li>kompresorem stanu,</li>\n            <li>pamięcią wektorową (RAG).</li>\n        </ul>\n\n        <p><strong>Schemat:</strong></p>\n        <pre>User\n  ↓\nPlanner (LLM)\n  ↓\nExecutor (LLM + tools)\n  ↓\nState Compressor\n  ↓\nVector Memory (RAG)</pre>\n\n        <p>Każdy komponent widzi tylko to, czego potrzebuje.</p>\n\n        <h3>Implementacja krok po kroku</h3>\n\n        <p>Poniżej minimalna, ale poprawna architektonicznie implementacja.</p>\n\n        <h4>1️⃣ Konfiguracja modelu</h4>\n        <p>Zaczynamy od inicjalizacji modelu.</p>\n        <pre><code class=\"language-python\">from langchain.chat_models import ChatOpenAI\n\nllm = ChatOpenAI(\n    model=\"gpt-4\",\n    temperature=0\n)</code></pre>\n        <p>Dlaczego <code>temperature=0</code>?<br>Bo w systemach produkcyjnych chcemy przewidywalności.</p>\n\n        <h4>2️⃣ Pamięć długoterminowa (Vector Store)</h4>\n        <p>Oddzielamy pamięć roboczą od trwałej.</p>\n        <pre><code class=\"language-python\">from langchain.vectorstores import FAISS\nfrom langchain.embeddings import OpenAIEmbeddings\nfrom langchain.docstore.document import Document\n\nembeddings = OpenAIEmbeddings()\nvector_store = FAISS.from_documents([], embeddings)\n\ndef save_to_memory(text: str):\n    vector_store.add_documents([Document(page_content=text)])\n\ndef retrieve_memory(query: str):\n    docs = vector_store.similarity_search(query, k=3)\n    return \"\\n\".join([d.page_content for d in docs])</code></pre>\n        <p>Co tu się dzieje?</p>\n        <ul>\n            <li>Fakty zapisujemy w bazie wektorowej.</li>\n            <li>Nie trzymamy ich w oknie kontekstowym.</li>\n            <li>Pobieramy je tylko wtedy, gdy są potrzebne.</li>\n        </ul>\n        <p>To klasyczny wzorzec RAG.</p>\n\n        <h4>3️⃣ Planner — oddzielny kontekst</h4>\n        <p>Planner nie widzi historii. Widzi tylko cel.</p>\n        <pre><code class=\"language-python\">from langchain.schema import SystemMessage, HumanMessage\n\ndef create_plan(goal: str) -> str:\n    response = llm([\n        SystemMessage(content=\"Jesteś planerem. Twórz krótki plan kroków.\"),\n        HumanMessage(content=f\"Cel: {goal}\")\n    ])\n    return response.content</code></pre>\n        <p>Dlaczego osobny kontekst?<br>Bo planowanie i wykonanie to różne zadania poznawcze.</p>\n\n        <h4>4️⃣ Executor — izolacja kroków</h4>\n        <p>Każdy krok wykonywany jest w świeżym kontekście.</p>\n        <pre><code class=\"language-python\">def execute_step(step: str, state_summary: str) -> str:\n    context = f\"\"\"\n    Aktualny stan:\n    {state_summary}\n\n    Wykonaj krok:\n    {step}\n\n    Zwróć tylko kluczowe fakty.\n    \"\"\"\n\n    response = llm([HumanMessage(content=context)])\n    return response.content</code></pre>\n        <p>Executor dostaje tylko:</p>\n        <ul>\n            <li>aktualny stan,</li>\n            <li>pojedynczy krok,</li>\n            <li>ewentualnie dane z pamięci.</li>\n        </ul>\n        <p>Nie widzi całej historii.</p>\n\n        <h4>5️⃣ Rolling summary — kompresja stanu</h4>\n        <p>Po każdym kroku kompresujemy stan.</p>\n        <pre><code class=\"language-python\">def compress_state(previous_summary: str, new_info: str) -> str:\n    prompt = f\"\"\"\n    Poprzedni stan:\n    {previous_summary}\n\n    Nowe informacje:\n    {new_info}\n\n    Zaktualizuj krótki stan zadania.\n    \"\"\"\n\n    response = llm([HumanMessage(content=prompt)])\n    return response.content</code></pre>\n        <p>Zamiast rosnącej historii mamy:</p>\n        <ul>\n            <li>cel,</li>\n            <li>kluczowe ustalenia,</li>\n            <li>otwarte wątki.</li>\n        </ul>\n        <p>Redukcja kontekstu nawet o 70–90%.</p>\n\n        <h4>6️⃣ Główna pętla agenta</h4>\n        <p>Łączymy wszystko w jedną strukturę.</p>\n        <pre><code class=\"language-python\">def run_agent(goal: str):\n    print(\"Cel:\", goal)\n\n    plan = create_plan(goal)\n    steps = plan.split(\"\\n\")\n\n    state_summary = \"Zadanie rozpoczęte.\"\n\n    for step in steps:\n        if not step.strip():\n            continue\n\n        # Pobranie faktów z pamięci długoterminowej\n        memory_context = retrieve_memory(step)\n\n        # Wykonanie kroku w izolowanym kontekście\n        result = execute_step(step, state_summary + \"\\n\" + memory_context)\n\n        # Kompresja stanu\n        state_summary = compress_state(state_summary, result)\n\n        # Zapis do pamięci wektorowej\n        save_to_memory(result)\n\n    print(\"Finalny stan:\")\n    print(state_summary)\n\n\nif __name__ == \"__main__\":\n    run_agent(\"Zbadaj rynek kursów AI i podsumuj trendy.\")</code></pre>\n\n        <p>Co ten system demonstruje?</p>\n        <ul>\n            <li>✔ Oddzielenie planowania od wykonania</li>\n            <li>✔ Izolację kontekstu</li>\n            <li>✔ Kompresję historii</li>\n            <li>✔ Oddzielenie pamięci roboczej od trwałej</li>\n            <li>✔ Kontrolę wzrostu tokenów</li>\n        </ul>\n        <p>To podstawy produkcyjnego context engineering.</p>\n\n        <h3>Najważniejsze wzorce projektowe</h3>\n        <ol>\n            <li>\n                <strong>State instead of history</strong><br>\n                Nie przekazuj modelowi tego, co się wydarzyło. Przekazuj aktualny stan zadania.\n            </li>\n            <li>\n                <strong>Selektywne przekazywanie wyników narzędzi</strong><br>\n                Nie wrzucaj pełnych odpowiedzi API. Parsuj je i przekazuj tylko istotne fakty.\n            </li>\n            <li>\n                <strong>Segmentacja zadań</strong><br>\n                Rozbijaj złożone problemy na podzadania z osobnym kontekstem.\n            </li>\n            <li>\n                <strong>Kontrola chain-of-thought</strong><br>\n                W produkcji zapisuj wynik, nie pełne rozumowanie.\n            </li>\n        </ol>\n\n        <h3>Pełny kod projektu</h3>\n        <p>Pełna wersja przykładu (z:</p>\n        <ul>\n            <li>kontrolą liczby tokenów,</li>\n            <li>structured output (JSON),</li>\n            <li>retry policy,</li>\n            <li>monitoringiem długości kontekstu,</li>\n            <li>tańszym modelem do kompresji,</li>\n            <li>asynchroniczną obsługą narzędzi)</li>\n        </ul>\n        <p>możesz umieścić w repozytorium, np.:<br>📂 <a href=\"https://github.com/tomaszjader/context-engineering-agent\" target=\"_blank\">https://github.com/tomaszjader/context-engineering-agent</a></p>\n\n        <h3>Podsumowanie</h3>\n        <p>Context engineering to nie kosmetyka promptów. To projektowanie środowiska informacyjnego modelu.</p>\n        <p>Jeśli budujesz:</p>\n        <ul>\n            <li>chatboty,</li>\n            <li>agentów,</li>\n            <li>systemy analityczne,</li>\n            <li>copilots,</li>\n            <li>narzędzia automatyzujące pracę,</li>\n        </ul>\n        <p>to jakość Twojego systemu zależy bardziej od architektury kontekstu niż od samego modelu.</p>\n        <p>Modele będą coraz większe. Okna kontekstowe będą rosły.</p>\n        <p>Ale zasada pozostanie ta sama:</p>\n        <p><strong>Model nie potrzebuje wszystkiego. Potrzebuje dokładnie tego, co jest istotne.</strong></p>"
  },
  {
    "slug": "budowa-agentow-ai-to-powazne-wyzwanie",
    "title": "Budowa agentów AI to już nie tylko \"prompt engineering\". To poważne wyzwanie architektoniczne. 🏗️",
    "excerpt": "W świecie Enterprise stajemy przed wyborem: postawić na korporacyjną stabilność Google ADK, czy na ogromną elastyczność ekosystemu LangChain/LangGraph?",
    "publishedAt": "2026-02-23",
    "originalDate": "February 23, 2026",
    "category": "AI",
    "tags": [
      "AI",
      "GenerativeAI",
      "GoogleCloud",
      "LangChain",
      "MachineLearning",
      "SoftwareArchitecture",
      "Agents"
    ],
    "image": "assets/blog/1771798369667.webp",
    "imageAlt": "Budowa agentów AI to już nie tylko \"prompt engineering\". To poważne wyzwanie architektoniczne. 🏗️",
    "sourceUrl": "https://tomaszjader.com/blog/budowa-agentow-ai-to-powazne-wyzwanie",
    "wordCount": 88,
    "readingMinutes": 1,
    "contentHtml": "<p>Budowa agentów AI to już nie tylko \"prompt engineering\". To poważne wyzwanie architektoniczne. 🏗️</p>\n        \n        <p>W świecie Enterprise stajemy przed wyborem: postawić na korporacyjną stabilność Google ADK, czy na ogromną elastyczność ekosystemu LangChain/LangGraph?</p>\n        \n        <p>Na moim blogu pojawiła się właśnie analiza porównawcza tych dwóch gigantów. Sprawdzam w niej:</p>\n        <ul>\n            <li>✅ Podejście Code-First vs. Grafy Stanowe.</li>\n            <li>✅ Jak zarządzać zestawem 10+ narzędzi bez \"przepalania\" tokenów.</li>\n            <li>✅ Kiedy determinizm Google ADK wygrywa z elastycznością open-source.</li>\n        </ul>\n        \n        <p>Jeśli zastanawiasz się, który framework będzie fundamentem Twojego kolejnego projektu – ten artykuł jest dla Ciebie.</p>\n        <img src=\"assets/blog/1771798369667.webp\" alt=\"Meme\">\n        <p>🔗 <a href=\"https://lnkd.in/dVYtDyZt\" target=\"_blank\">https://lnkd.in/dVYtDyZt</a></p>"
  },
  {
    "slug": "adk-vs-langchain-wybor-frameworka-agenty-ai",
    "title": "ADK vs. LangChain: Wybór frameworka dla agentów AI klasy Enterprise",
    "excerpt": "Era prostych chatbotów przemija. Dziś projektujemy autonomiczne agenty AI, które planują, rozumują i korzystają z zewnętrznych narzędzi. Wybór fundamentu dla takiego systemu to decyzja między stabilnością korporacyjną a elastycznością open-source.",
    "publishedAt": "2026-02-22",
    "originalDate": "February 22, 2026",
    "category": "AI",
    "tags": [
      "AI",
      "Enterprise",
      "Agents",
      "GoogleADK",
      "LangChain",
      "LangGraph",
      "Architecture",
      "Python"
    ],
    "image": "assets/blog/adk-vs-langchain.webp",
    "imageAlt": "ADK vs. LangChain: Wybór frameworka dla agentów AI klasy Enterprise",
    "sourceUrl": "https://tomaszjader.com/blog/adk-vs-langchain-wybor-frameworka-agenty-ai",
    "wordCount": 489,
    "readingMinutes": 3,
    "contentHtml": "<p>Era prostych chatbotów przemija. Dziś projektujemy autonomiczne agenty AI, które planują, rozumują i korzystają z zewnętrznych narzędzi. Wybór fundamentu dla takiego systemu to decyzja między stabilnością korporacyjną a elastycznością open-source. Porównajmy dwa najsilniejsze rozwiązania: Google Agent Development Kit (ADK) oraz duet LangChain/LangGraph.</p>\n\n        <h3>Filozofia: Code-First kontra Grafy Stanowe</h3>\n        <p>Główna różnica leży w podejściu do kontroli nad modelem:</p>\n        <ul>\n            <li><strong>Google ADK (Podejście Inżynierskie):</strong> Stawia na zasadę code-first. Logika agenta i narzędzia są definiowane bezpośrednio w kodzie, co ułatwia testowanie, typowanie i integrację CI/CD. To rozwiązanie dla tych, którzy cenią rygor klasycznej inżynierii oprogramowania.</li>\n            <li><strong>LangChain/LangGraph (Podejście Elastyczne):</strong> Ewoluował z narzędzia do szybkiego prototypowania w stronę LangGraph – systemu opartego na stanowych grafach cyklicznych. Pozwala on budować złożone pętle rozumowania, gdzie agent może wracać do poprzednich kroków, by poprawić błędy.</li>\n        </ul>\n\n        <h3>Google ADK: Precyzyjna Orkiestracja i Ekosystem</h3>\n        <p>ADK świetnie zarządza poziomem autonomii poprzez różne typy agentów:</p>\n        <table class=\"table table-bordered my-4 text-white\">\n            <thead class=\"bg-dark\">\n                <tr>\n                    <th>Typ Agenta</th>\n                    <th>Charakterystyka</th>\n                    <th>Zastosowanie</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>LLM Agent</td>\n                    <td>Dynamiczny i kreatywny</td>\n                    <td>Planowanie i rozumowanie.</td>\n                </tr>\n                <tr>\n                    <td>Sequential</td>\n                    <td>Pełny determinizm</td>\n                    <td>Procesy krok po kroku (workflow).</td>\n                </tr>\n                <tr>\n                    <td>Parallel</td>\n                    <td>Praca równoległa</td>\n                    <td>Szybka analiza wielu źródeł danych.</td>\n                </tr>\n                <tr>\n                    <td>Loop</td>\n                    <td>Iteracyjne pętle</td>\n                    <td>Zadania powtarzalne do skutku.</td>\n                </tr>\n            </tbody>\n        </table>\n        <p><strong>Kluczowa zaleta:</strong> Choć zoptymalizowany pod Gemini i Google Cloud, ADK jest agnostyczny – dzięki LiteLLM obsłużysz nim także modele od OpenAI czy Anthropic.</p>\n\n        <h3>Zarządzanie narzędziami: Jak uniknąć chaosu?</h3>\n        <p>Gdy agent dostaje dostęp do 10+ narzędzi, pojawia się problem: koszty tokenów rosną, a precyzja wyboru spada. Jak radzą sobie z tym oba frameworki?</p>\n\n        <h4>Strategie Google ADK:</h4>\n        <ul>\n            <li><strong>Toolsety i Filtrowanie:</strong> Grupowanie narzędzi i dynamiczne udostępnianie tylko tych, które są potrzebne w danej sesji.</li>\n            <li><strong>Model Context Protocol (MCP):</strong> Natywne wsparcie dla \"USB dla narzędzi AI\" – pozwala łączyć się z zewnętrznymi serwerami udostępniającymi tysiące funkcji.</li>\n            <li><strong>Metacognitive Prompting:</strong> Agent najpierw tworzy plan, a dopiero potem \"wstrzykuje\" do kontekstu definicje konkretnych narzędzi.</li>\n        </ul>\n\n        <h4>Strategie LangChain/LangGraph:</h4>\n        <ul>\n            <li><strong>Wzorzec Routera:</strong> System klasyfikuje zapytanie i kieruje je do wyspecjalizowanego sub-agenta z ograniczonym zestawem narzędzi (np. tylko do bazy danych).</li>\n            <li><strong>Durable Execution:</strong> Dzięki \"checkpointerom\" stan agenta jest zapisywany w bazie (np. Redis). Jeśli system padnie, agent podejmie pracę dokładnie tam, gdzie przerwał.</li>\n        </ul>\n\n        <h3>Persystencja: Pamięć o użytkowniku</h3>\n        <p><strong>ADK:</strong> Wykorzystuje SessionService i VertexAIMemoryBankService. Pozwala to nie tylko na zapis historii rozmowy w SQL, ale też na \"pamiętanie\" preferencji użytkownika między różnymi, oddalonymi w czasie sesjami.</p>\n        <p><strong>LangGraph:</strong> Skupia się na trwałym zapisie stanu grafu. Każdy węzeł może modyfikować centralny obiekt State, co daje pełną kontrolę nad przepływem informacji.</p>\n\n        <h3>Werdykt: Co wybrać?</h3>\n\n        <h4>Wybierz Google ADK, jeśli:</h4>\n        <ul>\n            <li>Tworzysz rozwiązanie SaaS/Enterprise wewnątrz Google Cloud.</li>\n            <li>Wymagasz silnego determinizmu (logika biznesowa nie może się zmieniać).</li>\n            <li>Potrzebujesz natywnej i bezpiecznej integracji z Google Workspace (Gmail, Kalendarz).</li>\n            <li>Cenisz czysty, testowalny kod ponad wizualne budowanie łańcuchów.</li>\n        </ul>\n\n        <h4>Wybierz LangChain/LangGraph, jeśli:</h4>\n        <ul>\n            <li>Stawiasz na szybkie prototypowanie i korzystasz z niszowych bibliotek open-source.</li>\n            <li>Budujesz rozwiązanie Multi-cloud (nie chcesz przywiązania do jednego dostawcy).</li>\n            <li>Twój proces wymaga skomplikowanych pętli zwrotnych i dynamicznego sterowania przepływem.</li>\n            <li>Potrzebujesz zaawansowanej analityki ścieżek rozumowania (LangSmith).</li>\n        </ul>\n\n        <h3>Podsumowanie</h3>\n        <p>Google ADK to \"inżynierski młot\" dla stabilnych systemów korporacyjnych, gdzie ryzyko błędu musi być minimalne. LangChain to \"szwajcarski scyzoryk\" dla innowatorów, którzy potrzebują maksymalnej elastyczności w eksperymentowaniu z nowymi paradygmatami AI.</p>"
  },
  {
    "slug": "szeptucha-szczegolowy-poradnik-dostepny",
    "title": "Szeptucha: Szczegółowy poradnik budowy asystenta głosowego już dostępny! 🛠️",
    "excerpt": "Jakiś czas temu podzieliłem się tutaj projektem „Szeptucha” – moim własnym narzędziem do notatek głosowych opartym na modelu Whisper od OpenAI. 🎙️ Post o tym, jak przestałem polegać na gotowych subskrypcjach...",
    "publishedAt": "2026-02-16",
    "originalDate": "February 16, 2026",
    "category": "SztucznaInteligencja",
    "tags": [
      "SztucznaInteligencja",
      "Whisper",
      "OpenAI",
      "Python",
      "Produktywność",
      "Automatyzacja",
      "Programowanie",
      "BuildNotBuy"
    ],
    "image": "assets/blog/szeptucha-whisper.webp",
    "imageAlt": "Szeptucha: Szczegółowy poradnik budowy asystenta głosowego już dostępny! 🛠️",
    "sourceUrl": "https://tomaszjader.com/blog/szeptucha-szczegolowy-poradnik-dostepny",
    "wordCount": 160,
    "readingMinutes": 1,
    "contentHtml": "<p>Jakiś czas temu podzieliłem się tutaj projektem „Szeptucha” – moim własnym narzędziem do notatek głosowych opartym na modelu Whisper od OpenAI. 🎙️</p>\n        \n        <p>Post o tym, jak przestałem polegać na gotowych subskrypcjach i napisałem własny system transkrypcji, odbił się szerokim echem (ponad 17 000 wyświetleń!). Zauważyłem, że temat budowania własnych, tanich narzędzi AI zamiast płacenia za drogie abonamenty bardzo Wam się spodobał.</p>\n        \n        <p>Dlatego postanowiłem pociągnąć ten wątek i przygotowałem coś konkretnego.</p>\n        \n        <p>Właśnie wrzuciłem na bloga szczegółowy poradnik, w którym krok po kroku opisuję, jak to rozwiązanie powstało „od kuchni”. Bez lania wody, same techniczne i praktyczne aspekty:</p>\n        \n        <ul>\n            <li>✅ Jak wykorzystać model Whisper do błyskawicznej transkrypcji.</li>\n            <li>✅ Jak spiąć wszystko prostym skryptem pod skrót klawiszowy.</li>\n            <li>✅ Dlaczego przy moim użytkowaniu takie rozwiązanie jest ekonomicznie bezkonkurencyjne.</li>\n        </ul>\n        \n        <p>Jeśli szukasz inspiracji do stworzenia własnego mikro-narzędzia, ten wpis jest dla Ciebie. 🛠️</p>\n        \n        <p>Link do poradnika znajdziesz tutaj: 👉 <a href=\"/blog/budowanie-wlasnego-asystenta-glosowego-szeptucha-python\">Szeptucha - Szczegółowy Poradnik</a></p>\n        \n        <p>Dajcie znać w komentarzach, jakie inne narzędzia AI próbowaliście (lub chcielibyście) zastąpić własnymi skryptami!</p>"
  },
  {
    "slug": "budowanie-wlasnego-asystenta-glosowego-szeptucha-python",
    "title": "Budowanie własnego asystenta głosowego \"Szeptucha\" w Pythonie",
    "excerpt": "Wyobraź sobie narzędzie, które pozwala Ci dyktować notatki w dowolnym miejscu systemu Windows – w Wordzie, Notatniku, czy przeglądarce – za pomocą jednego skrótu klawiszowego. Takim narzędziem jest **Szeptucha**.",
    "publishedAt": "2026-02-15",
    "originalDate": "February 15, 2026",
    "category": "Python",
    "tags": [
      "Python",
      "VoiceAssistant",
      "OpenAI",
      "Whisper",
      "Automation",
      "Tutorial"
    ],
    "image": "assets/blog/szeptucha-voice-assistant.webp",
    "imageAlt": "Budowanie własnego asystenta głosowego \"Szeptucha\" w Pythonie",
    "sourceUrl": "https://tomaszjader.com/blog/budowanie-wlasnego-asystenta-glosowego-szeptucha-python",
    "wordCount": 747,
    "readingMinutes": 4,
    "contentHtml": "<p>Wyobraź sobie narzędzie, które pozwala Ci dyktować notatki w dowolnym miejscu systemu Windows – w Wordzie, Notatniku, czy przeglądarce – za pomocą jednego skrótu klawiszowego. Takim narzędziem jest <strong>Szeptucha</strong>.</p>\n\n        <p>W tym poradniku przeanalizujemy kod źródłowy projektu \"Szeptucha\" i wyjaśnimy, jak zbudować własnego asystenta głosowego, który:</p>\n        <ol>\n            <li>Nagrywa Twój głos po naciśnięciu skrótu (np. Ctrl+Alt).</li>\n            <li>Wyświetla eleganckie okno nagrywania \"always-on-top\".</li>\n            <li>Transkrybuje mowę na tekst przy użyciu modelu <strong>OpenAI Whisper</strong> (przez API lub lokalnie).</li>\n            <li>Automatycznie wkleja rozpoznany tekst w miejsce, gdzie znajduje się kursor.</li>\n        </ol>\n\n        <h2>Wymagania wstępne</h2>\n\n        <p>Aby uruchomić lub zbudować taki projekt, potrzebujesz zainstalowanego Pythona (3.8+) oraz kilku kluczowych bibliotek:</p>\n\n        <ul>\n            <li><strong>PyAudio</strong>: Do obsługi mikrofonu i nagrywania dźwięku.</li>\n            <li><strong>OpenAI</strong>: Do komunikacji z API Whisper (transkrypcja w chmurze).</li>\n            <li><strong>Faster-Whisper</strong>: Do transkrypcji lokalnej (opcjonalnie, wymaga więcej RAM/GPU).</li>\n            <li><strong>Pynput</strong>: Do obsługi globalnych skrótów klawiszowych i symulacji klawiatury.</li>\n            <li><strong>Tkinter</strong>: Do stworzenia interfejsu graficznego (jest w standardowej bibliotece Pythona).</li>\n            <li><strong>PyWin32</strong>: Do interakcji z oknami systemu Windows.</li>\n        </ul>\n\n        <p>Instalacja zależności:</p>\n        <pre><code class=\"language-bash\">pip install pyaudio openai pynput pyperclip pywin32 numpy\n# Opcjonalnie dla lokalnego modelu:\npip install faster-whisper\n</code></pre>\n\n        <h2>Architektura Systemu</h2>\n\n        <p>Projekt Szeptucha składa się z kilku niezależnych modułów, które współpracują ze sobą. Przeanalizujmy najważniejsze z nich.</p>\n\n        <h3>1. Nagrywanie Dźwięku (audio_recorder.py)</h3>\n\n        <p>Serce systemu to moduł odpowiedzialny za przechwytywanie dźwięku z mikrofonu. Wykorzystujemy bibliotekę <code>PyAudio</code> do strumieniowego pobierania danych i zapisywania ich do tymczasowego pliku WAV.</p>\n\n        <p>Kluczowe fragmenty kodu:</p>\n\n        <pre><code class=\"language-python\">import pyaudio\nimport wave\nimport tempfile\nimport threading\n\nclass AudioRecorder:\n    def __init__(self):\n        self.audio = pyaudio.PyAudio()\n        self.frames = []\n        self.is_recording = False\n\n    def start_recording(self):\n        \"\"\"Uruchamia nagrywanie w osobnym wątku.\"\"\"\n        self.is_recording = True\n        self.frames = []\n        threading.Thread(target=self._record_loop).start()\n\n    def _record_loop(self):\n        \"\"\"Pętla nagrywania działająca w tle.\"\"\"\n        stream = self.audio.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=1024)\n        while self.is_recording:\n            data = stream.read(1024)\n            self.frames.append(data)\n        stream.stop_stream()\n        stream.close()\n\n    def stop_recording(self):\n        \"\"\"Zatrzymuje nagrywanie i zapisuje plik.\"\"\"\n        self.is_recording = False\n        # ... zapisywanie self.frames do pliku WAV za pomocą biblioteki wave ...\n        return \"sciezka_do_pliku.wav\"\n</code></pre>\n\n        <p>Dzięki użyciu osobnego wątku (<code>threading</code>), interfejs aplikacji nie zacina się podczas nagrywania.</p>\n\n        <h3>2. Transkrypcja Mowy (transcription_service.py)</h3>\n\n        <p>Szeptucha obsługuje dwa tryby: <strong>API</strong> (chmura) oraz <strong>Lokalny</strong>.</p>\n\n        <ul>\n            <li><strong>Tryb API</strong>: Wysyła plik audio do OpenAI. Jest szybki i lekki dla komputera, ale wymaga klucza API i połączenia z internetem.</li>\n            <li><strong>Tryb Lokalny</strong>: Używa modelu <code>faster-whisper</code> uruchamianego na Twoim komputerze. Działa offline, ale wymaga mocniejszego sprzętu.</li>\n        </ul>\n\n        <p>Fragment implementacji obsługi API:</p>\n\n        <pre><code class=\"language-python\">from openai import OpenAI\n\nclass TranscriptionService:\n    def __init__(self, api_key):\n        self.client = OpenAI(api_key=api_key)\n\n    def transcribe(self, file_path):\n        \"\"\"Wysyła plik do API OpenAI Whisper.\"\"\"\n        with open(file_path, \"rb\") as audio_file:\n            transcript = self.client.audio.transcriptions.create(\n                model=\"whisper-1\",\n                file=audio_file,\n                language=\"pl\" # Wymuszamy język polski\n            )\n        return transcript.text\n</code></pre>\n\n        <h3>3. Globalne Skróty Klawiszowe (hotkey_manager.py)</h3>\n\n        <p>Aby aplikacja była użyteczna, musi działać \"w tle\" i reagować na skrót klawiszowy (np. Ctrl+Alt) niezależnie od tego, w jakim oknie aktualnie pracujemy. Do tego służy biblioteka <code>pynput</code>.</p>\n\n        <pre><code class=\"language-python\">from pynput import keyboard\n\nclass HotkeyManager:\n    def __init__(self, callback):\n        self.callback = callback # Funkcja wywoływana po wciśnięciu skrótu\n\n    def start(self):\n        \"\"\"Uruchamia nasłuchiwanie skrótów.\"\"\"\n        # Definiujemy kombinację, np. '&lt;ctrl&gt;+&lt;alt&gt;'\n        self.listener = keyboard.GlobalHotKeys({\n            '&lt;ctrl&gt;+&lt;alt&gt;': self.callback\n        })\n        self.listener.start()\n</code></pre>\n\n        <h3>4. Interfejs Graficzny \"Overlay\" (recording_window.py)</h3>\n\n        <p>Szeptucha wyświetla małe, zawsze widoczne okienko podczas nagrywania. Wykorzystujemy <code>Tkinter</code> z flagami <code>overrideredirect</code> (brak ramek systemowych) i <code>topmost</code> (zawsze na wierzchu).</p>\n\n        <pre><code class=\"language-python\">import tkinter as tk\n\nclass RecordingWindow:\n    def show(self):\n        self.window = tk.Toplevel()\n        self.window.overrideredirect(True) # Brak paska tytułowego\n        self.window.attributes('-topmost', True) # Zawsze na wierzchu\n        \n        # Rysowanie wizualizacji fali dźwiękowej na Canvas...\n        self.canvas = tk.Canvas(self.window, bg='black')\n        self.canvas.pack()\n</code></pre>\n\n        <p>Moduł ten zawiera również logikę rysowania animowanej fali dźwiękowej (waveform) w oparciu o głośność nagrywanego dźwięku.</p>\n\n        <h3>5. Automatyczne Wklejanie Tekstu (text_processor.py)</h3>\n\n        <p>Ostatni krok to wklejenie tekstu. Zamiast bawić się w skomplikowane API systemowe do wprowadzania tekstu, Szeptucha stosuje sprytny trik:</p>\n        <ol>\n            <li>Kopiuje rozpoznany tekst do schowka (<code>pyperclip</code>).</li>\n            <li>Symuluje naciśnięcie kombinacji <code>Ctrl+V</code> (<code>pynput</code>).</li>\n        </ol>\n\n        <pre><code class=\"language-python\">import pyperclip\nfrom pynput.keyboard import Controller, Key\n\ndef paste_text(text):\n    # 1. Kopiuj do schowka\n    pyperclip.copy(text)\n    \n    # 2. Symuluj Ctrl+V\n    keyboard = Controller()\n    with keyboard.pressed(Key.ctrl):\n        keyboard.press('v')\n        keyboard.release('v')\n</code></pre>\n\n        <p>Dodatkowo, moduł ten sprawdza, czy aktywne okno w ogóle obsługuje wprowadzanie tekstu, analizując klasę okna za pomocą <code>win32gui</code>.</p>\n\n        <h2>Podsumowanie</h2>\n\n        <p>Szeptucha łączy kilka potężnych technologii w jedno proste narzędzie. Dzięki modularnej budowie łatwo można ją rozwijać, np. dodając obsługę innych modeli AI, tłumaczenie w czasie rzeczywistym czy komendy głosowe uruchamiające aplikacje.</p>\n\n        <p>Cały kod źródłowy projektu Szeptucha jest świetnym przykładem, jak tworzyć praktyczne narzędzia desktopowe w Pythonie, integrujące AI z codzienną pracą.</p>\n\n        <p><strong>Główne zalety takiego rozwiązania:</strong></p>\n        <ul>\n            <li><strong>Prywatność</strong> (w trybie lokalnym).</li>\n            <li><strong>Uniwersalność</strong> (działa w każdym polu tekstowym).</li>\n            <li><strong>Oszczędność czasu</strong> (dyktowanie jest szybsze niż pisanie).</li>\n        </ul>\n\n        <p>Zachęcam do eksperymentowania z kodem i dostosowania go do własnych potrzeb!</p>\n\n        <h2>Kod źródłowy</h2>\n\n        <p>Cały projekt jest dostępny na GitHubie: <a href=\"https://github.com/tomaszjader/szeptucha\">https://github.com/tomaszjader/szeptucha</a>. Zapraszam do pobierania, testowania i gwiazdkowania!</p>"
  },
  {
    "slug": "jak-zbudowac-wlasny-system-rag",
    "title": "Jak zbudować własny system RAG? 🛠️",
    "excerpt": "Niedawno pokazywałem Wam, że mój blog zyskał nową funkcję – system RAG, który pozwala AI odpowiadać na pytania w oparciu o moje artykuły. Dziś czas zajrzeć pod maskę tej technologii.",
    "publishedAt": "2026-02-09",
    "originalDate": "February 09, 2026",
    "category": "Python",
    "tags": [
      "Python",
      "RAG",
      "ArtificialIntelligence",
      "Qdrant",
      "OpenAI",
      "LLM",
      "Programowanie",
      "VectorDatabase",
      "Wiedza"
    ],
    "image": "assets/blog/rag-source-of-truth.webp",
    "imageAlt": "Jak zbudować własny system RAG? 🛠️",
    "sourceUrl": "https://tomaszjader.com/blog/jak-zbudowac-wlasny-system-rag",
    "wordCount": 126,
    "readingMinutes": 1,
    "contentHtml": "<p>Niedawno pokazywałem Wam, że mój blog zyskał nową funkcję – system RAG, który pozwala AI odpowiadać na pytania w oparciu o moje artykuły. Dziś czas zajrzeć pod maskę tej technologii.</p>\n        \n        <img src=\"assets/blog/rag-source-of-truth.webp\" alt=\"Meme: Spójrz na mnie. To ja jestem teraz źródłem prawdy dla LLM (dzięki RAG)\" class=\"img-fluid my-4 rounded\">\n\n        <p>Zamiast ogólników, przygotowałem konkretny poradnik o tym, jak połączyć potęgę LLM z własną bazą wiedzy przy użyciu Pythona i bazy wektorowej Qdrant.</p>\n        \n        <p>W tym artykule na blogu pokazuję 3 kluczowe kroki:</p>\n        <ul>\n          <li><strong>Indeksowanie danych:</strong> Jak przetworzyć tekst na wektory i zapisać je w bazie Qdrant.</li>\n          <li><strong>Wyszukiwanie semantyczne:</strong> Jak znaleźć w bazie fragmenty tekstu pasujące do znaczenia pytania użytkownika.</li>\n          <li><strong>Generowanie odpowiedzi:</strong> Jak wykorzystać znaleziony kontekst, by model AI (np. GPT-4) odpowiadał precyzyjnie i bez halucynacji.</li>\n        </ul>\n        \n        <p>To fundamenty, które pozwolą Ci stworzyć asystenta AI „czytającego” Twoje dokumenty.</p>\n        \n        <p>Dajcie znać, czy takie techniczne „deep dive’y” są dla Was przydatne! 👇</p>"
  },
  {
    "slug": "budowanie-wlasnego-systemu-rag-python",
    "title": "Budowanie własnego systemu RAG (Retrieval-Augmented Generation) w Pythonie",
    "excerpt": "Systemy RAG (Retrieval-Augmented Generation) łączą w sobie potęgę dużych modeli językowych (LLM) z własną bazą wiedzy. Dzięki temu możemy tworzyć asystentów AI, którzy odpowiadają na pytania w oparciu o specyficzne dane.",
    "publishedAt": "2026-02-08",
    "originalDate": "February 08, 2026",
    "category": "RAG",
    "tags": [
      "RAG",
      "Python",
      "OpenAI",
      "Qdrant",
      "VectorDatabase",
      "LLM",
      "AI",
      "Tutorial"
    ],
    "image": "assets/blog/rag-python-system.webp",
    "imageAlt": "Budowanie własnego systemu RAG (Retrieval-Augmented Generation) w Pythonie",
    "sourceUrl": "https://tomaszjader.com/blog/budowanie-wlasnego-systemu-rag-python",
    "wordCount": 599,
    "readingMinutes": 3,
    "contentHtml": "<p>Systemy RAG (Retrieval-Augmented Generation) łączą w sobie potęgę dużych modeli językowych (LLM) z własną bazą wiedzy. Dzięki temu możemy tworzyć asystentów AI, którzy odpowiadają na pytania w oparciu o specyficzne dane, których model nie widział podczas treningu.</p>\n\n        <p>W tym poradniku pokażę, jak zaimplementować kluczowe mechanizmy RAG przy użyciu Pythona, OpenAI API oraz bazy wektorowej Qdrant.</p>\n\n        <h2>Wymagania wstępne</h2>\n        <p>Zanim zaczniesz budować swój system RAG, upewnij się, że posiadasz zainstalowane następujące narzędzia oraz klucze dostępu:</p>\n        <ul>\n            <li><strong>Docker</strong>: Niezbędny do uruchomienia bazy wektorowej Qdrant w kontenerze.</li>\n            <li><strong>Python</strong>: Język programowania, w którym napiszemy logikę aplikacji (zalecana wersja 3.8+).</li>\n            <li><strong>Klucz API OpenAI</strong>: Niezbędny do generowania embeddingów oraz odpowiedzi modelu.</li>\n        </ul>\n\n        <h2>Uruchomienie Qdranta</h2>\n        <p>Aby uruchomić bazę wektorową Qdrant, wykonaj poniższe polecenia w terminalu (wymagany Docker). Najpierw pobierz obraz:</p>\n        <pre><code class=\"language-bash\">docker pull qdrant/qdrant</code></pre>\n\n        <p>Następnie uruchom kontener:</p>\n        <pre><code class=\"language-bash\">docker run -p 6333:6333 -p 6334:6334     -v $(pwd)/qdrant_storage:/qdrant/storage     qdrant/qdrant</code></pre>\n\n        <h2>1. Dodawanie wiedzy do bazy wektorowej</h2>\n        <p>Pierwszym krokiem jest przetworzenie naszych danych tekstowych na wektory (tzw. embeddings) i zapisanie ich w bazie. Każdy fragment tekstu otrzymuje swoją reprezentację numeryczną, co pozwala na późniejsze wyszukiwanie semantyczne.</p>\n\n        <p>Poniższy kod pokazuje funkcję <code>index_data</code>, która iteruje przez linie tekstu, generuje dla nich embeddingi i wysyła do Qdranta za pomocą funkcji <code>add_points</code>.</p>\n\n        <pre><code class=\"language-python\">\nimport hashlib\nimport requests\n\ndef add_points(url, json_data):\n    \"\"\"Wysyła punkty (wektory) do kolekcji w Qdrant.\"\"\"\n    response = requests.put(url=f\"{url}/points\", json=json_data)\n    if response.status_code == 200:\n        print(\"Punkty zostały dodane pomyślnie.\")\n    else:\n        print(f\"Błąd dodawania punktów: {response.text}\")\n    return response.text\n\ndef index_data(lines, url, client):\n    \"\"\"Indeksuje listę linii tekstu w bazie wektorowej.\"\"\"\n    for line in lines:\n        # Tworzymy unikalne ID dla każdego punktu na podstawie treści\n        point_id = hashlib.md5(line.encode()).hexdigest()\n        \n        # Generujemy wektor embeddingu (funkcja pomocnicza generate_embedding)\n        vector = generate_embedding(client, line)\n        \n        json_data = {\n            \"points\": [\n                {\n                    'id': point_id,\n                    \"payload\": {'text': line},\n                    \"vector\": vector\n                }\n            ]\n        }\n        add_points(url=url, json_data=json_data)\n        </code></pre>\n\n        <h2>2. Wyszukiwanie kontekstowe w bazie wektorowej</h2>\n        <p>Gdy mamy już zaindeksowaną wiedzę, możemy ją przeszukiwać. Nie szukamy jednak po słowach kluczowych, ale po <em>znaczeniu</em> zapytania (podobieństwo wektorowe).</p>\n\n        <p>Funkcja <code>search_collection_with_context</code> zamienia pytanie użytkownika na wektor, a następnie pyta bazę Qdrant o najbardziej pasujące fragmenty tekstu. Wyniki są łączone w jeden ciąg tekstowy, który posłuży jako kontekst dla AI.</p>\n\n        <pre><code class=\"language-python\">\ndef search_collection_with_context(url, query, client):\n    \"\"\"Wyszukuje najbardziej pasujące fragmenty tekstu dla danego zapytania.\"\"\"\n    # Zamieniamy pytanie użytkownika na wektor\n    query_vector = generate_embedding(client, query)\n    \n    search_payload = {\n        \"vector\": query_vector,\n        \"limit\": 3,  # Pobieramy 3 najlepsze wyniki, aby zbudować szerszy kontekst\n        \"with_payload\": True\n    }\n    \n    response = requests.post(url=f'{url}/points/search', json=search_payload)\n    \n    if response.status_code == 200:\n        results = response.json()\n        # Łączymy znalezione fragmenty w jeden tekst kontekstu\n        context = \"\n\".join([result['payload']['text'] for result in results['result']])\n        return context\n    else:\n        print(f\"Błąd wyszukiwania: {response.text}\")\n        return None\n        </code></pre>\n\n        <h2>3. Generowanie odpowiedzi z wykorzystaniem kontekstu (RAG)</h2>\n        <p>Ostatnim etapem jest połączenie znalezionego kontekstu z zapytaniem użytkownika i przesłanie tego do modelu językowego (np. GPT-3.5 lub GPT-4).</p>\n\n        <p>W funkcji <code>generate_answer_with_context</code> tworzymy prompt systemowy, który instruuje model, aby opierał się na dostarczonym kontekście. Dzięki temu odpowiedź jest precyzyjna i dotyczy naszych danych.</p>\n\n        <pre><code class=\"language-python\">\ndef generate_answer_with_context(client, query, context):\n    \"\"\"Generuje odpowiedź modelu AI w oparciu o znaleziony kontekst.\"\"\"\n    messages = [\n        {\n            \"role\": \"system\", \n            \"content\": \"Jesteś pomocnym asystentem. Odpowiedz na pytanie użytkownika na podstawie dostarczonego kontekstu.\"\n        },\n        {\n            \"role\": \"user\", \n            \"content\": f\"Kontekst:\n{context}\n\nPytanie: {query}\"\n        }\n    ]\n    \n    response = client.chat.completions.create(\n        model=\"gpt-3.5-turbo\",\n        messages=messages\n    )\n    \n    return response.choices[0].message.content\n        </code></pre>\n\n        <h2>Podsumowanie</h2>\n        <p>Powyższy kod stanowi fundament prostego systemu RAG. Cały proces zamyka się w pętli:</p>\n        <ol>\n            <li><strong>Indeksowanie</strong>: Tekst -> Embedding -> Baza Wektorowa.</li>\n            <li><strong>Retrieval (Wyszukiwanie)</strong>: Pytanie -> Embedding -> Wyszukanie w bazie -> Kontekst.</li>\n            <li><strong>Generation (Generowanie)</strong>: Kontekst + Pytanie -> LLM -> Odpowiedź.</li>\n        </ol>\n\n        <p>Mając te funkcje, możemy zbudować chatbota, który \"czyta\" nasze dokumenty i potrafi o nich rozmawiać.</p>\n\n        <h2>Kod źródłowy</h2>\n        <p>Cały przedstawiony kod jest dostępny w moim repozytorium na GitHubie: <a href=\"https://github.com/tomaszjader/RAG\" target=\"_blank\">tomaszjader/RAG</a>. Zachęcam do pobrania, testowania i rozwijania projektu!</p>"
  },
  {
    "slug": "rag-gpt4o-qdrant-assistant",
    "title": "🚀 Od bazy wektorowej do inteligentnego asystenta – wdrożyłem RAG z wykorzystaniem GPT-4o!",
    "excerpt": "Ostatnio zastanawiałem się, jak nadać mojej bazie wektorowej drugie życie. Postanowiłem przejść od słów do czynów i rozbudować ją o możliwość interakcji z treściami. Efekt? Asystent AI w architekturze RAG.",
    "publishedAt": "2026-02-01",
    "originalDate": "February 01, 2026",
    "category": "AI",
    "tags": [
      "AI",
      "RAG",
      "GPT4o",
      "OpenAI",
      "LangChain",
      "Qdrant",
      "VectorDatabase",
      "Python",
      "FastAPI",
      "Innovation",
      "MachineLearning"
    ],
    "image": "assets/blog/rag-gpt4o.webp",
    "imageAlt": "🚀 Od bazy wektorowej do inteligentnego asystenta – wdrożyłem RAG z wykorzystaniem GPT-4o!",
    "sourceUrl": "https://tomaszjader.com/blog/rag-gpt4o-qdrant-assistant",
    "wordCount": 200,
    "readingMinutes": 1,
    "contentHtml": "<p>🚀 Od bazy wektorowej do inteligentnego asystenta – wdrożyłem RAG z wykorzystaniem GPT-4o!</p>\n        \n        <p>Ostatnio zastanawiałem się, jak nadać mojej bazie wektorowej drugie życie. Postanowiłem przejść od słów do czynów i rozbudować ją o możliwość interakcji z treściami.</p>\n        \n        <p>Efekt? Stworzyłem asystenta AI w architekturze RAG (Retrieval-Augmented Generation), który pozwala \"rozmawiać\" z moimi postami. Dzięki temu czytelnicy mogą błyskawicznie wyciągać konkretną wiedzę z archiwalnych treści.</p>\n        \n        <h4>Co potrafi to rozwiązanie?</h4>\n        <ul>\n            <li>Precyzyjnie odpowiada na pytania o technologie opisane w postach.</li>\n            <li>Dzięki integracji z GPT-4o odpowiedzi są naturalne, merytoryczne i bardzo trafne.</li>\n            <li>Pełna kontrola nad kontekstem: asystent bazuje wyłącznie na moich treściach – nie zmyśla, nie wychodzi poza ramy bloga.</li>\n        </ul>\n\n        <img src=\"assets/blog/rag-gpt4o.webp\" alt=\"Meme: Baza wektorowa zwykła vs Baza wektorowa z LangChain i GPT-4o\" class=\"img-fluid my-4 rounded\">\n        \n        <h4>Mój tech-stack dla tego projektu:</h4>\n        <ul>\n            <li>🔹 <strong>OpenAI (GPT-4o)</strong> – jako \"mózg\" operacyjny i silnik rozumowania.</li>\n            <li>🔹 <strong>LangChain</strong> – do orkiestracji agenta i przepływu danych.</li>\n            <li>🔹 <strong>FastAPI</strong> – lekki i szybki backend.</li>\n            <li>🔹 <strong>Qdrant</strong> – moja baza wektorowa, która trzyma wszystkie dane.</li>\n        </ul>\n        \n        <p>Najbardziej cieszy mnie to, że system \"wstał\" niemal bezproblemowo za pierwszym razem. Zapraszam do testów – na moim blogu znajdziecie nowy dymek czatu, gotowy do rozmowy o moich artykułach!</p>\n        \n        <p>Jakie są Wasze doświadczenia z modelem GPT-4o w rozwiązaniach typu RAG? Zauważyliście dużą różnicę w jakości odpowiedzi względem starszych modeli? Chętnie podyskutuję w komentarzach! 👇</p>"
  },
  {
    "slug": "n8n-formularz-kontaktowy",
    "title": "Czy jako Frontendowiec męczy Cię konfigurowanie backendu tylko po to, by obsłużyć prosty formularz kontaktowy? 📩",
    "excerpt": "Ostatnio szukałem alternatywy dla gotowych rozwiązań typu EmailJS. Zazwyczaj wymagają one albo płatnej subskrypcji, albo stawiania dedykowanego serwera pocztowego. Pomyślałem: a co gdyby wykorzystać do tego n8n? 🤔",
    "publishedAt": "2026-01-25",
    "originalDate": "January 25, 2026",
    "category": "n8n",
    "tags": [
      "n8n",
      "automation",
      "webdevelopment",
      "frontend",
      "nocode",
      "javascript",
      "selfhosted",
      "productivity"
    ],
    "image": "assets/blog/n8n-form-meme.webp",
    "imageAlt": "Czy jako Frontendowiec męczy Cię konfigurowanie backendu tylko po to, by obsłużyć prosty formularz kontaktowy? 📩",
    "sourceUrl": "https://tomaszjader.com/blog/n8n-formularz-kontaktowy",
    "wordCount": 155,
    "readingMinutes": 1,
    "contentHtml": "<p>Czy jako Frontendowiec męczy Cię konfigurowanie backendu tylko po to, by obsłużyć prosty formularz kontaktowy? 📩</p>\n        \n        <p>Ostatnio szukałem alternatywy dla gotowych rozwiązań typu EmailJS. Zazwyczaj wymagają one albo płatnej subskrypcji, albo stawiania dedykowanego serwera pocztowego.</p>\n        \n        <p>Pomyślałem: a co gdyby wykorzystać do tego n8n? 🤔</p>\n        \n        <p>Przeszedłem od słów do czynów. Moje rozwiązanie działa już na produkcyjnej stronie i opiera się na prostym workflow:</p>\n        \n        <ol>\n            <li>1️⃣ Webhook odbiera dane z formularza.</li>\n            <li>2️⃣ Google Sheets zapisuje zgłoszenie w bazie.</li>\n            <li>3️⃣ Noda Gmail wysyła automatyczne podziękowanie do klienta oraz powiadomienie do mnie.</li>\n        </ol>\n        \n        <img src=\"assets/blog/n8n-form-meme.webp\" alt=\"Meme: Konfigurowanie serwera pocztowego vs n8n do formularzy kontaktowych\" class=\"img-fluid my-4 rounded\">\n\n        <h4>Dlaczego warto?</h4>\n        <ul>\n            <li>✅ <strong>Pełna kontrola:</strong> Nie zależysz od zewnętrznych dostawców i ich cenników.</li>\n            <li>✅ <strong>Oszczędność:</strong> Przy własnej instancji n8n rozwiązanie jest darmowe (oszczędzasz ok. 9$ miesięcznie).</li>\n            <li>✅ <strong>Skalowalność:</strong> Łatwo dodasz kolejne kroki, np. powiadomienie na Slacku.</li>\n        </ul>\n        \n        <p>To prosta automatyzacja, która oszczędza mnóstwo frustracji przy konfiguracji.</p>\n        \n        <p>A Wy jakich narzędzi używacie do obsługi formularzy na landing page’ach? Stawiacie na gotowce, czy budujecie własne mikroserwisy? Dajcie znać w komentarzach! 👇</p>"
  },
  {
    "slug": "wyszukiwanie-semantyczne-qdrant-python-fastapi",
    "title": "Zainspirowałem się wyszukiwarką w \"unknowNews\" i postanowiłem stworzyć własne wyszukiwanie semantyczne",
    "excerpt": "Łatwo nie było, ale efekt końcowy daje mnóstwo satysfakcji! 🚀 Zamiast tradycyjnego szukania po słowach kluczowych, mój blog rozumie teraz intencje użytkownika.",
    "publishedAt": "2026-01-18",
    "originalDate": "January 18, 2026",
    "category": "Python",
    "tags": [
      "Python",
      "VectorDatabase",
      "Qdrant",
      "FastAPI",
      "SemanticSearch",
      "AI",
      "Programowanie",
      "MachineLearning",
      "WebDevelopment"
    ],
    "image": "assets/blog/semantic-search-meme.webp",
    "imageAlt": "Zainspirowałem się wyszukiwarką w \"unknowNews\" i postanowiłem stworzyć własne wyszukiwanie semantyczne",
    "sourceUrl": "https://tomaszjader.com/blog/wyszukiwanie-semantyczne-qdrant-python-fastapi",
    "wordCount": 128,
    "readingMinutes": 1,
    "contentHtml": "<p>Zainspirowałem się wyszukiwarką w \"unknowNews\" i postanowiłem stworzyć własne wyszukiwanie semantyczne. Łatwo nie było, ale efekt końcowy daje mnóstwo satysfakcji! 🚀</p>\n        \n        <p>Zamiast tradycyjnego szukania po słowach kluczowych, mój blog rozumie teraz intencje użytkownika. Wpisujesz pytanie językiem naturalnym, a algorytm przeszukuje bazę wektorową i podaje 3 najbardziej trafne wpisy.</p>\n        \n        <h4>Jak to zbudowałem?</h4>\n        <ul>\n          <li><strong>Qdrant</strong> – jako silnik bazy wektorowej.</li>\n          <li><strong>Python + FastAPI</strong> – do obsługi logiki i API.</li>\n          <li><strong>ngrok</strong> – aby bezpiecznie wystawić usługę na zewnątrz.</li>\n        </ul>\n        \n        <img src=\"assets/blog/semantic-search-meme.webp\" alt=\"Meme: Wyszukiwanie tradycyjne vs semantyczne vs własna baza wektorowa\" class=\"img-fluid my-4 rounded\">\n\n        <p>To była cenna lekcja pokory. Technologia potrafi dać w kość, zwłaszcza przy konfiguracji sieciowej i \"wystawianiu na świat\", ale warto było przez to przejść dla końcowego efektu.</p>\n        \n        <p>Zobacz jak to działa na żywo: <a href=\"https://tomaszjader.com/blog\" target=\"_blank\">https://tomaszjader.com/blog</a></p>\n        \n        <p>A Wy? Korzystacie już z wyszukiwania semantycznego w swoich projektach, czy zostajecie przy klasycznym SQL-owym LIKE? Dajcie znać w komentarzach!</p>"
  },
  {
    "slug": "agent-tomek-google-adk-automatyzacja-instagrama",
    "title": "Jak stworzyłem „Agenta Tomka\" – asystenta AI do automatyzacji Instagrama i notatek, bazując na Google ADK.",
    "excerpt": "Udział w Kursie Umiejętności Jutra 2.0, zorganizowanym przez Google i SGH Warsaw School of Economics, oraz zdobycie certyfikatu potwierdzającego moje nowe kompetencje, zaowocowały pomysłem stworzenia własnego agenta AI.",
    "publishedAt": "2026-01-17",
    "originalDate": "January 17, 2026",
    "category": "GoogleADK",
    "tags": [
      "GoogleADK",
      "Automatyzacja",
      "Python",
      "SztucznaInteligencja",
      "ContentMarketing",
      "Innowacje",
      "TelegramBot",
      "UmiejętnościJutra",
      "AI"
    ],
    "image": "assets/blog/agent-tomek-google-adk.webp",
    "imageAlt": "Jak stworzyłem „Agenta Tomka\" – asystenta AI do automatyzacji Instagrama i notatek, bazując na Google ADK.",
    "sourceUrl": "https://tomaszjader.com/blog/agent-tomek-google-adk-automatyzacja-instagrama",
    "wordCount": 251,
    "readingMinutes": 2,
    "contentHtml": "<p>Jak stworzyłem „Agenta Tomka\" – asystenta AI do automatyzacji Instagrama i notatek, bazując na Google ADK.</p>\n        \n        <p>Udział w Kursie Umiejętności Jutra 2.0, zorganizowanym przez Google i SGH Warsaw School of Economics, oraz zdobycie certyfikatu potwierdzającego moje nowe kompetencje, zaowocowały pomysłem stworzenia własnego agenta AI.</p>\n        \n        <p>Moim celem było zbudowanie wirtualnego asystenta, który potrafiłby publikować posty na Instagramie, tworzyć proste notatki na komputerze, a także wyszukiwać podstawowe informacje, takie jak pogoda.</p>\n        \n        <p>Zabrałem się do pracy. Finalnie, po wielu bojach, udało się ukończyć ten projekt i okiełznać krnąbrnego asystenta, którego nazwałem Agentem Tomkiem.</p>\n        \n        <p>Kluczowe rozwiązanie polega na wykorzystaniu Telegrama. Dzięki normalnej konwersacji jestem w stanie wydawać mu polecenia. Na przykład, przed publikacją posta na Instagramie, Agent Tomek pomaga mi stworzyć optymalne tagi i angażujący tytuł. Wszystko odbywa się w formie naturalnego dialogu, co uważam za dużo przyjemniejsze i szybsze niż korzystanie z natywnego interfejsu Instagrama.</p>\n        \n        <img src=\"assets/blog/agent-tomek-google-adk.webp\" alt=\"Meme: Programista vs Agent Tomek - negocjacje\" class=\"img-fluid my-4 rounded\">\n\n        <p>Najzabawniejszym aspektem projektu było testowanie. Początkowo Agent Tomek bywał bardzo uparty – nie chciał słuchać moich poleceń! Wiele razy musiałem go prosić, by wykonał proste zadanie, np. usunął niepotrzebną frazę z tytułu czy opublikował post. Zdarzało się, że musiałem ponawiać komendę nawet pięć razy! Choć problem został finalnie rozwiązany, te pierwsze, komiczne „negocjacje\" z asystentem wspominam z największym sentymentem.</p>\n        \n        <p>Całość rozwiązania bazuje na języku Python, Google ADK (Agent Development Kit) oraz API Telegrama. Projekt ten był doskonałym praktycznym zwieńczeniem wiedzy, którą zdobyłem na kursie Umiejętności Jutra 2.0.</p>\n        \n        <p>A Wy, jak wykorzystujecie potencjał Google ADK i innych narzędzi AI? Dajcie znać w komentarzu, jakie projekty automatyzacyjne wzbudzają Waszą ciekawość! 👇</p>"
  },
  {
    "slug": "hodowla-kur-na-balkonie-claude-ai-eksperyment",
    "title": "Czy zastanawiałeś się kiedyś nad hodowlą kur… na balkonie? 🐔🌿",
    "excerpt": "Brzmi absurdalnie, prawda? A jednak taki pomysł pojawił się u mnie – nie dlatego, że planuję zamienić balkon w kurnik, ale dlatego, że testowałem Claude AI od Anthropic do generowania stron internetowych.",
    "publishedAt": "2026-01-17",
    "originalDate": "January 17, 2026",
    "category": "AI",
    "tags": [
      "AI",
      "Claude",
      "Anthropic",
      "WebDev",
      "Eksperyment",
      "Kreatywność",
      "Absurd"
    ],
    "image": "assets/blog/hodowla-kur-balkon.webp",
    "imageAlt": "Czy zastanawiałeś się kiedyś nad hodowlą kur… na balkonie? 🐔🌿",
    "sourceUrl": "https://tomaszjader.com/blog/hodowla-kur-na-balkonie-claude-ai-eksperyment",
    "wordCount": 161,
    "readingMinutes": 1,
    "contentHtml": "<p>Czy zastanawiałeś się kiedyś nad hodowlą kur… na balkonie? 🐔🌿</p>\n        \n        <p>Brzmi absurdalnie, prawda? A jednak taki pomysł pojawił się u mnie – nie dlatego, że planuję zamienić balkon w kurnik, ale dlatego, że testowałem Claude AI od Anthropic do generowania stron internetowych.</p>\n        \n        <p>I co się okazało? Większość moich znajomych w ogóle nie zakwestionowała samej idei. Zamiast tego zaczęli zastanawiać się:</p>\n        <ul>\n            <li>🐔 Jak by to mogło działać?</li>\n            <li>🥚 Ile jajek można by „wyprodukować” w miesiącu?</li>\n            <li>💰 Czy to faktycznie się opłaca?</li>\n        </ul>\n        \n        <p>Nie zatrzymali się na absurdzie, tylko weszli głębiej w logikę pomysłu – a nawet zaczęli liczyć wyniki w kalkulatorze.</p>\n        \n        <img src=\"assets/blog/hodowla-kur-balkon.webp\" alt=\"Obrazek: Kury na balkonie\" class=\"img-fluid my-4 rounded\">\n\n        <p>I to mnie rozbawiło, ale i zainspirowało.</p>\n        \n        <p>👉 Czasem właśnie absurd otwiera kreatywność bardziej niż rozsądek.</p>\n        <p>👉 Eksperymenty z nietypowymi scenariuszami potrafią dać świeże spojrzenie – i w AI, i w biznesie.</p>\n        <p>👉 Absurdalne pytania często prowadzą do najbardziej sensownych odpowiedzi.</p>\n        \n        <p>📌 Link do strony wrzucam w komentarzu.</p>\n        \n        <p>A teraz pytanie do Ciebie: Kiedy ostatnio pozwoliłeś sobie potraktować absurd całkiem serio? 🤔</p>"
  },
  {
    "slug": "moje-pierwsze-kroki-vibe-coding-sukces",
    "title": "✨ Moje pierwsze kroki w vibe codingu zakończyły się sukcesem! ✨",
    "excerpt": "Udało mi się stworzyć aplikację do śledzenia nawyków, idealnie dopasowaną do moich potrzeb. 🚀 Cały proces był fascynującym doświadczeniem – pełnym wyzwań, nauki i nieoczekiwanych problemów.",
    "publishedAt": "2026-01-17",
    "originalDate": "January 17, 2026",
    "category": "WebDevelopment",
    "tags": [
      "WebDevelopment",
      "Coding",
      "Projekt",
      "Aplikacja",
      "Programowanie",
      "AI",
      "VibeCoding"
    ],
    "image": "assets/blog/vibe-coding-success.webp",
    "imageAlt": "✨ Moje pierwsze kroki w vibe codingu zakończyły się sukcesem! ✨",
    "sourceUrl": "https://tomaszjader.com/blog/moje-pierwsze-kroki-vibe-coding-sukces",
    "wordCount": 106,
    "readingMinutes": 1,
    "contentHtml": "<p>✨ Moje pierwsze kroki w vibe codingu zakończyły się sukcesem! ✨</p>\n        \n        <p>Udało mi się stworzyć aplikację do śledzenia nawyków, idealnie dopasowaną do moich potrzeb. 🚀</p>\n        \n        <p>Cały proces był fascynującym doświadczeniem – pełnym wyzwań, nauki i nieoczekiwanych problemów.</p>\n        \n        <p>👉 Spotkałem się m.in. z:</p>\n        <ul>\n            <li>🔧 awarią wibracji po miesiącu działania,</li>\n            <li>🎨 zniknięciem funkcjonalności po zmianie wyglądu na styl iOS.</li>\n        </ul>\n        \n        <img src=\"assets/blog/vibe-coding-success.webp\" alt=\"Meme: How it started vs How it's going with AI\" class=\"img-fluid my-4 rounded\">\n\n        <p>Zamiast się poddać, potraktowałem to jako okazję do nauki i doskonalenia umiejętności. 💡</p>\n        \n        <p>Ten projekt był moim marzeniem od lat, ale dopiero teraz – dzięki wsparciu sztucznej inteligencji – mogłem go zrealizować sprawniej i skuteczniej niż kiedykolwiek. Jestem naprawdę dumny, że udało mi się doprowadzić go do końca. 🙌</p>"
  },
  {
    "slug": "moja-walka-z-literowkami-aplikacja-android",
    "title": "💥 Moja Walka z Literówkami: Jak Dysleksja Popchnęła Mnie do Stworzenia Aplikacji na Androida",
    "excerpt": "Nie wiem, czy też tak macie, ale poprawianie literówek potrafi doprowadzić mnie do szału. Zwłaszcza gdy wiem, co chcę napisać… a ekran uparcie pokazuje coś innego. 😅 Z mojej frustracji z dysleksją narodził się pomysł.",
    "publishedAt": "2026-01-17",
    "originalDate": "January 17, 2026",
    "category": "AndroidDev",
    "tags": [
      "AndroidDev",
      "MobileDevelopment",
      "Dysleksja",
      "EdTech",
      "Accessibility",
      "PersonalProject",
      "WłasnyProjekt"
    ],
    "image": "assets/blog/android-dyslexia-app.webp",
    "imageAlt": "💥 Moja Walka z Literówkami: Jak Dysleksja Popchnęła Mnie do Stworzenia Aplikacji na Androida",
    "sourceUrl": "https://tomaszjader.com/blog/moja-walka-z-literowkami-aplikacja-android",
    "wordCount": 202,
    "readingMinutes": 2,
    "contentHtml": "<p>💥 Moja Walka z Literówkami: Jak Dysleksja Popchnęła Mnie do Stworzenia Aplikacji na Androida</p>\n        \n        <p>Nie wiem, czy też tak macie, ale poprawianie literówek potrafi doprowadzić mnie do szału. Zwłaszcza gdy wiem, co chcę napisać… a ekran uparcie pokazuje coś innego. 😅</p>\n        \n        <p>Z mojej frustracji z dysleksją narodził się pomysł: 👉 stworzę aplikację, która sama poprawia błędy w tekście.</p>\n        \n        <p>Brzmi prosto? Tylko brzmi. 😅</p>\n        \n        <img src=\"assets/blog/android-dyslexia-app.webp\" alt=\"Meme: Expectation vs Reality - Ja po skompilowaniu aplikacji po raz pierwszy vs Aplikacja: [crash sound]\" class=\"img-fluid my-4 rounded\">\n\n        <h4>🔧 Droga od pomysłu do prototypu</h4>\n        <p>Drugie podejście. Tym razem — Android.</p>\n        <ul>\n            <li>💥 Pierwsze uruchomienie? Nic nie działa.</li>\n            <li>🌥️ Drugie? Działa... ale tylko trochę.</li>\n            <li>❄️ Trzecie? Zawiesza się przy każdym zaznaczeniu tekstu.</li>\n        </ul>\n        \n        <p>I tak przez wiele dni. Poprawki, testy, kolejne błędy.</p>\n        \n        <p>W końcu powstał pierwszy działający prototyp – aplikacja, która poprawia literówki, zanim zdążę się zdenerwować. 🙌</p>\n        \n        <h4>😂 Najzabawniejszy moment?</h4>\n        <p>Google uznało moją aplikację za… wirusa. Serio. Nie mogłem jej nawet wrzucić na własny Dysk Google.</p>\n        \n        <p>To był ten moment, gdy pomyślałem: “Skoro Google myśli, że to wirus, to znaczy, że aplikacja jest potężna.” 💪</p>\n        \n        <h4>💡 Co dalej?</h4>\n        <ul>\n            <li>🔹 aplikacja działa lokalnie na Androidzie</li>\n            <li>🔹 wysyła tekst do modelu korekcyjnego</li>\n            <li>🔹 zwraca poprawioną wersję</li>\n            <li>🔹 w planach: publikacja w Google Play</li>\n        </ul>\n        \n        <p>🚀 Potrzebuję Waszej opinii. Jak Wy radzicie sobie z dysleksją w codziennej komunikacji? 💬 Dajcie znać w komentarzu!</p>"
  },
  {
    "slug": "n8n-okiem-programisty-agent-automatyzacji",
    "title": "Od „Psa do Jeża” do Agenta Automatyzacji – Moja Prawda o N8N jako Programisty",
    "excerpt": "Słyszałem wiele pozytywnych opinii o narzędziach low-code, które rzekomo pozwalają bardzo szybko stworzyć ciekawe projekty. Ale, powiedzmy to szczerze: jako programista, podchodziłem do tematu jak pies do jeża.",
    "publishedAt": "2026-01-17",
    "originalDate": "January 17, 2026",
    "category": "Automatyzacja",
    "tags": [
      "Automatyzacja",
      "N8N",
      "LowCode",
      "Programowanie",
      "DeveloperLife",
      "IntegracjeAPI",
      "Digitalizacja"
    ],
    "image": "assets/blog/n8n-programista-opinion.webp",
    "imageAlt": "Od „Psa do Jeża” do Agenta Automatyzacji – Moja Prawda o N8N jako Programisty",
    "sourceUrl": "https://tomaszjader.com/blog/n8n-okiem-programisty-agent-automatyzacji",
    "wordCount": 260,
    "readingMinutes": 2,
    "contentHtml": "<p>Od „Psa do Jeża” do Agenta Automatyzacji – Moja Prawda o N8N jako Programisty 🐾🦔</p>\n        \n        <p>Słyszałem wiele pozytywnych opinii o narzędziach low-code, które rzekomo pozwalają bardzo szybko stworzyć ciekawe projekty.</p>\n        \n        <p>Ale, powiedzmy to szczerze: jako programista, podchodziłem do tematu jak pies do jeża. Przerzucenie się na narzędzia wizualne, takie jak N8N, wydawało mi się stratą czasu w porównaniu do pisania czystego kodu.</p>\n        \n        <img src=\"assets/blog/n8n-programista-opinion.webp\" alt=\"Meme: One does not simply connect n8n to telegram without https on local machine\" class=\"img-fluid my-4 rounded\">\n\n        <h4>Pierwsze podejście? Porażka.</h4>\n        <p>Próba uruchomienia N8N na lokalnej maszynie napotkała na problem z integracją Telegrama. Wymagało to HTTPS-a, co wymuszało instalację dodatkowych narzędzi. Zniechęciłem się i poddałem za pierwszym razem.</p>\n        \n        <h4>Drugie podejście: Czas na \"Mikrusa\"</h4>\n        <p>Dałem N8N drugą szansę. Tym razem postawiłem go na kupionym serwerze, tzw. \"Mikrusie\" od 🔥 Jakub Mrugalski. Po wielu bojach w końcu nadszedł sukces!</p>\n        \n        <p>Udało mi się stworzyć pierwszego, prostego agenta automatyzacji, który zarządza moimi sprawami z poziomu Telegrama:</p>\n        <ul>\n            <li>✉️ Wysyła e-maile z Gmaila.</li>\n            <li>📅 Dodaje nowe wydarzenia do Kalendarza Google.</li>\n            <li>🔎 Sprawdza, jakie mam wydarzenia dzisiaj lub w konkretnym przedziale czasowym.</li>\n        </ul>\n        \n        <p>Cały system działa tak, że piszę przez Telegram, a asystent dopytuje o szczegóły i wykonuje podane czynności. Takie narzędzie daje realną wolność!</p>\n        \n        <h4>Czego nauczyłem się w boju?</h4>\n        <p>Wracam honor! N8N to naprawdę fajne narzędzie. Pozwala szybko zobaczyć efekt pracy.</p>\n        \n        <p>Największe problemy sprawiło mi nie samo N8N, lecz... podpięcie Google API. To nie jest proste i zajęło najwięcej czasu. Po tym, było już z górki.</p>\n        \n        <p>Low-code wymaga przełamania barier mentalnych. Mimo to, wciąż uważam, że dla zaawansowanych rzeczy czysty kod jest (na razie) szybszy.</p>\n        \n        <p>A Ty? Jakie są Twoje doświadczenia z narzędziami low-code/no-code? W jakich projektach widzisz dla nich największy potencjał? 👇</p>"
  },
  {
    "slug": "asystent-pogodowy-n8n-telegram-api",
    "title": "Jak w 5 minut stworzyć własnego Asystenta Pogodowego? 🌤️",
    "excerpt": "n8n to potężne narzędzie! Ostatnio szukałem pomysłu na kolejny mały projekt automatyzacyjny i postanowiłem rozwiązać swój wieczny problem: zapominanie o sprawdzeniu pogody.",
    "publishedAt": "2026-01-17",
    "originalDate": "January 17, 2026",
    "category": "n8n",
    "tags": [
      "n8n",
      "Automatyzacja",
      "WeatherAPI",
      "Telegram",
      "SideProject",
      "LowCode"
    ],
    "image": "assets/blog/weather-assistant-n8n.webp",
    "imageAlt": "Jak w 5 minut stworzyć własnego Asystenta Pogodowego? 🌤️",
    "sourceUrl": "https://tomaszjader.com/blog/asystent-pogodowy-n8n-telegram-api",
    "wordCount": 141,
    "readingMinutes": 1,
    "contentHtml": "<p>Jak w 5 minut stworzyć własnego Asystenta Pogodowego? 🌤️</p>\n        \n        <p>n8n to potężne narzędzie! Ostatnio szukałem pomysłu na kolejny mały projekt automatyzacyjny i postanowiłem rozwiązać swój wieczny problem: zapominanie o sprawdzeniu pogody.</p>\n        \n        <p>Udało mi się stworzyć prostą, ale efektywną automatyzację, która codziennie o 8:00 rano wysyła mi prognozę prosto na Telegram.</p>\n        \n        <img src=\"assets/blog/weather-assistant-n8n.webp\" alt=\"Meme: Jak wstajesz rano i widzisz powiadomienie z Telegrama, ale Ty sam sobie wysłałeś to powiadomienie\" class=\"img-fluid my-4 rounded\">\n\n        <p>Wiem, że większość aplikacji to robi, ale satysfakcja z posiadania własnego, działającego rozwiązania, które nie wymaga skomplikowanej konfiguracji serwera, jest bezcenna!</p>\n        \n        <h4>Co jest potrzebne do stworzenia takiego workflow?</h4>\n        <ul>\n            <li>🔹 Platforma do automatyzacji: <strong>n8n</strong></li>\n            <li>🔹 Źródło danych: <strong>OpenWeatherMap API</strong></li>\n            <li>🔹 Kanał komunikacji: <strong>Telegram</strong></li>\n        </ul>\n        \n        <p>A co było najzabawniejsze? Dziś rano obudziłem się, usłyszałem powiadomienie i pomyślałem, że ktoś do mnie napisał. Dopiero po chwili zorientowałem się, że to... moja własna automatyzacja! 😅</p>\n        \n        <p>Prosta rzecz, a tak cieszy!</p>\n        \n        <p>A Ty? Jakie najciekawsze drobne automatyzacje stworzyłeś ostatnio dla własnych potrzeb? Podziel się w komentarzu! 👇</p>"
  },
  {
    "slug": "gymtracker-vibe-coding-drugie-podejscie",
    "title": "👨💻💪 Drugie podejście do vibe codingu, ale wreszcie się udało! GymTracker is here!",
    "excerpt": "Od dawna marzyłem o tym, żeby mieć własną aplikację do śledzenia postępów na siłowni. Za pierwszym razem – brak czasu i motywacji. Za drugim podejściem, już z vibe codingiem wspieranym przez AI i odrobiną uporu… i jest! 🚀",
    "publishedAt": "2026-01-17",
    "originalDate": "January 17, 2026",
    "category": "VibeCoding",
    "tags": [
      "VibeCoding",
      "AI",
      "Angular",
      "GoogleSheets",
      "GymTracker",
      "SideProject",
      "WebDev"
    ],
    "image": "assets/blog/gymtracker-vibe-coding.webp",
    "imageAlt": "👨💻💪 Drugie podejście do vibe codingu, ale wreszcie się udało! GymTracker is here!",
    "sourceUrl": "https://tomaszjader.com/blog/gymtracker-vibe-coding-drugie-podejscie",
    "wordCount": 169,
    "readingMinutes": 1,
    "contentHtml": "<p>👨💻💪 Drugie podejście do vibe codingu, ale wreszcie się udało!</p>\n        \n        <p>Od dawna marzyłem o tym, żeby mieć własną aplikację do śledzenia postępów na siłowni. Za pierwszym razem – brak czasu i motywacji. Za drugim podejściem, już z vibe codingiem wspieranym przez AI i odrobiną uporu… i jest! 🚀</p>\n        \n        <p>👉 Tak powstał <strong>GymTracker</strong> – webowa aplikacja napisana w Angularze 20, z integracją z Google Sheets, która pozwala śledzić treningi, statystyki i postępy na wykresach.</p>\n        \n        <img src=\"assets/blog/gymtracker-vibe-coding.webp\" alt=\"Meme: AI Fixing the bug vs Programista z debuggerem\" class=\"img-fluid my-4 rounded\">\n\n        <p>Najfajniejsza część? Podczas pracy zdarzały się typowo programistyczne „przygody”. Wrzucam log błędu do AI, odpowiedź: „wszystko naprawione”. Odpalam ponownie… i dokładnie ten sam błąd 🙃 To był moment, w którym zrozumiałem, że AI to świetny partner, ale nie zrobi wszystkiego za nas.</p>\n        \n        <p>Cała ta przygoda pokazała mi, że:</p>\n        <ul>\n            <li>✅ nawet jeśli zaczynasz od zera, da się stworzyć coś działającego,</li>\n            <li>✅ AI potrafi ogromnie przyspieszyć proces,</li>\n            <li>✅ satysfakcja z własnego projektu to najlepsza nagroda.</li>\n        </ul>\n        \n        <p>🔗 Repozytorium i szczegóły aplikacji znajdziesz tutaj: <a href=\"https://lnkd.in/dKy-A4Ek\" target=\"_blank\">https://lnkd.in/dKy-A4Ek</a></p>\n        \n        <p>Ciekaw jestem – kto z Was też próbował budować swoje projekty z pomocą AI? 🤔</p>"
  },
  {
    "slug": "autocenzura-pod-kontrola-vibe-coding-3",
    "title": "Autocenzura pod kontrolą: Czy Narzędzie Cenzurujące Słowa „Niewygodne” Ocali Twórców?",
    "excerpt": "Podejście do Vibe Codingu, numer 3. Od dawna zastanawiałem się nad rosnącym problemem: cenzurą algorytmiczną na platformach takich jak YouTube. Inspiracją do działania był jeden z odcinków podcastu „Na Wschód od Bliskiego Wschodu”.",
    "publishedAt": "2026-01-17",
    "originalDate": "January 17, 2026",
    "category": "AI",
    "tags": [
      "AI",
      "OpenAI",
      "ContentCreators",
      "YouTubeCreators",
      "Algorytmy",
      "MachineLearning",
      "VibeCoding",
      "Coding"
    ],
    "image": "assets/blog/autocenzura-vibe-coding.webp",
    "imageAlt": "Autocenzura pod kontrolą: Czy Narzędzie Cenzurujące Słowa „Niewygodne” Ocali Twórców?",
    "sourceUrl": "https://tomaszjader.com/blog/autocenzura-pod-kontrola-vibe-coding-3",
    "wordCount": 253,
    "readingMinutes": 2,
    "contentHtml": "<p>Autocenzura pod kontrolą: Czy Narzędzie Cenzurujące Słowa „Niewygodne” Ocali Twórców? 🤔</p>\n        <p>Podejście do Vibe Codingu, numer 3.</p>\n\n        <p>Od dawna zastanawiałem się nad rosnącym problemem: cenzurą algorytmiczną na platformach takich jak YouTube. Inspiracją do działania był jeden z odcinków podcastu „Na Wschód od Bliskiego Wschodu” Wojciecha Szewko. Postawiłem sobie za cel: stworzyć narzędzie, które chroni zasięgi twórców przed automatycznymi blokerami.</p>\n        \n        <p>Jaka była idea?</p>\n        <p>Chciałem, aby narzędzie identyfikowało słowa \"niewygodne\" (takie jak np. „kurde”, które mogłoby zostać błędnie zinterpretowane) i automatycznie zastępowało je dźwiękiem cenzury. W ten sposób treść pozostaje nienaruszona merytorycznie, a twórca nie traci cennych wyświetleń i przychodów.</p>\n        \n        <img src=\"assets/blog/autocenzura-vibe-coding.webp\" alt=\"Meme: Algorytm YouTube nie może ocenzurować słowa, jeśli nigdy go nie usłyszy\" class=\"img-fluid my-4 rounded\">\n\n        <p>Po kilkunastu iteracjach udało mi się osiągnąć zadowalające rezultaty.</p>\n        \n        <h4>Kluczowe etapy projektu:</h4>\n        <ul>\n            <li>🤖 <strong>Implementacja AI:</strong> Wykorzystanie modelu Whisper od OpenAI (zarówno lokalnie, jak i przez API) do precyzyjnej transkrypcji i identyfikacji słów.</li>\n            <li>🐛 <strong>\"Zabawna\" Usterka:</strong> W pierwszej iteracji narzędzie, z nieznanych mi przyczyn, dodawało cenzurę zupełnie losowo! Był to humorystyczny, ale pouczający błąd w procesie debugowania.</li>\n            <li>✅ <strong>Testy Skuteczności:</strong> Testy przeprowadzone na piosence „Dni, których nie znamy” Marka Grechuty wykazały skuteczność w zakresie 80-90%. Spodziewam się, że w przypadku podcastów i prostszych nagrań, efektywność będzie jeszcze wyższa.</li>\n        </ul>\n        \n        <p>Projekt Vibe Coding #3 udowadnia, że za pomocą AI możemy tworzyć inteligentne rozwiązania dla realnych problemów, z którymi mierzą się twórcy w sieci.</p>\n        \n        <p>A Wy, z jakimi problemami związanymi z algorytmami YouTube zmagacie się na co dzień? Jakie \"niewygodne\" słowa najczęściej Was blokują? Dajcie znać w komentarzu! 👇</p>\n        \n        <p>Pełen kod źródłowy projektu Vibe Coding #3 znajdziecie w pierwszym komentarzu poniżej. Jestem otwarty na Wasz feedback i Pull Requesty!</p>"
  },
  {
    "slug": "automatyzacja-instagrama-python-google-sheets",
    "title": "Miałem ostatnio pomysł na mały projekt po godzinach – prostą automatyzację publikowania postów.",
    "excerpt": "Na początku próbowałem podejść do tematu przez oficjalną aplikację na platformie Meta. Niestety, szybko się poddałem – proces konfiguracji okazał się bardziej skomplikowany, niż zakładałem. Drugie podejście zrobiłem w Pythonie – i tym razem się udało 🎉",
    "publishedAt": "2026-01-17",
    "originalDate": "January 17, 2026",
    "category": "Python",
    "tags": [
      "Python",
      "Automation",
      "SideProject",
      "Instagram",
      "GoogleSheets",
      "Telegram",
      "Coding",
      "DevLife"
    ],
    "image": "assets/blog/python-instagram-automation.webp",
    "imageAlt": "Miałem ostatnio pomysł na mały projekt po godzinach – prostą automatyzację publikowania postów.",
    "sourceUrl": "https://tomaszjader.com/blog/automatyzacja-instagrama-python-google-sheets",
    "wordCount": 115,
    "readingMinutes": 1,
    "contentHtml": "<p>Miałem ostatnio pomysł na mały projekt po godzinach – prostą automatyzację publikowania postów. 🚀</p>\n        \n        <p>Na początku próbowałem podejść do tematu przez oficjalną aplikację na platformie Meta, żeby połączyć się z Instagramem. Niestety, szybko się poddałem – proces konfiguracji okazał się bardziej skomplikowany, niż zakładałem.</p>\n        \n        <p>Drugie podejście zrobiłem w Pythonie – i tym razem się udało 🎉</p>\n        \n        <p>Bez tworzenia aplikacji w Meta, tylko przez symulację logowania w przeglądarce.</p>\n        \n        <img src=\"assets/blog/python-instagram-automation.webp\" alt=\"Meme: To chociaż prosta automatyzacja - This is fine dog with fire\" class=\"img-fluid my-4 rounded\">\n\n        <p>Efekt?</p>\n        <ul>\n            <li>👉 Skrypt, który pobiera dane z arkusza Google i w wybrane dni publikuje posty na Instagramie – z tytułem, tagami i zdjęciem.</li>\n            <li>👉 Dodatkowo po udanej publikacji wysyła powiadomienie na Telegram, żebym miał od razu feedback, że wszystko działa.</li>\n        </ul>\n        \n        <p>Mały side-project, a jednak daje dużo satysfakcji 🚀</p>"
  },
  {
    "slug": "automatyzacja-nawykow-n8n-wdziecznosc",
    "title": "Zapominasz o dobrych nawykach? Kluczem jest automatyzacja!",
    "excerpt": "Wszyscy chcemy wprowadzać pozytywne zmiany, ale często zderzamy się z jednym problemem: zapominaniem. Moja własna walka z wdrożeniem nawyku wdzięczności była tego najlepszym przykładem.",
    "publishedAt": "2026-01-17",
    "originalDate": "January 17, 2026",
    "category": "Automatyzacja",
    "tags": [
      "Automatyzacja",
      "Produktywność",
      "Nawyki",
      "n8n",
      "TechForGood"
    ],
    "image": "assets/blog/habits-automation.webp",
    "imageAlt": "Zapominasz o dobrych nawykach? Kluczem jest automatyzacja!",
    "sourceUrl": "https://tomaszjader.com/blog/automatyzacja-nawykow-n8n-wdziecznosc",
    "wordCount": 181,
    "readingMinutes": 1,
    "contentHtml": "<p>Zapominasz o dobrych nawykach? Kluczem jest automatyzacja! 🚀</p>\n        \n        <p>Wszyscy chcemy wprowadzać pozytywne zmiany, ale często zderzamy się z jednym problemem: zapominaniem.</p>\n        \n        <p>Moja własna walka z wdrożeniem nawyku wdzięczności była tego najlepszym przykładem. Nie chodziło o to, że nie miałem pomysłu na zmianę. Problem polegał na braku jasno zdefiniowanej, wymuszonej pory jej wykonania.</p>\n        \n        <img src=\"assets/blog/habits-automation.webp\" alt=\"Meme: Ja vs Moje Nawyki vs Pilne Zadania\" class=\"img-fluid my-4 rounded\">\n\n        <p>Zawsze odkładałem proste zapisywanie, za co jestem wdzięczny danego dnia. Skutek był ten sam: nawyk nie mógł się utrzymać.</p>\n        \n        <p>Wpadłem na pomysł, jak wykorzystać technologię, by rozwiązać ten problem. Stworzyłem prostą automatyzację w n8n.</p>\n        \n        <h4>Oto, jak to działa:</h4>\n        <ul>\n            <li>⏰ <strong>Codziennie o 20:00:</strong> n8n wysyła mi wiadomość na Telegramie z pytaniem: \"Za co jesteś dzisiaj wdzięczny?\".</li>\n            <li>🛑 <strong>Wymuszona reakcja:</strong> Muszę na to pytanie odpowiedzieć. W ten sposób nawyk zostaje zrealizowany.</li>\n            <li>📊 <strong>Podsumowanie miesiąca:</strong> Na początku każdego miesiąca dostaję zbiorczy raport z moimi odpowiedziami.</li>\n        </ul>\n        \n        <p>Pomaga mi to w sposób świadomy docenić każdy dzień, a na koniec miesiąca zobaczyć pełen obraz pozytywnych doświadczeń. To prosta zmiana, ale udowadnia, że automatyzacja może być potężnym narzędziem w służbie samo rozwoju.</p>\n        \n        <p>A Ty? Czy masz nawyk, który uratowałeś dzięki automatyzacji? Podziel się w komentarzu! 👇</p>"
  },
  {
    "slug": "ai-journal-dziennik-wspomagany-przez-llm",
    "title": "💭 AI w służbie samoświadomości: wypuściłem AI Journal – dziennik wspomagany przez LLM!",
    "excerpt": "Zainspirowany wykładem Franciszka Bazylego Georgiew, postanowiłem pójść o krok dalej i stworzyć własne narzędzie. Wierzę, że AI może realnie wspierać nas w codziennym rozwoju i refleksji nad sobą.",
    "publishedAt": "2026-01-17",
    "originalDate": "January 17, 2026",
    "category": "Programowanie",
    "tags": [
      "Programowanie",
      "OpenSource",
      "SztucznaInteligencja",
      "LLM",
      "Rozwój",
      "SideProject",
      "TworzenieOprogramowania"
    ],
    "image": "assets/blog/ai-journal.webp",
    "imageAlt": "💭 AI w służbie samoświadomości: wypuściłem AI Journal – dziennik wspomagany przez LLM!",
    "sourceUrl": "https://tomaszjader.com/blog/ai-journal-dziennik-wspomagany-przez-llm",
    "wordCount": 173,
    "readingMinutes": 1,
    "contentHtml": "<p>Zainspirowany wykładem Franciszek Bazyli Georgiew 高傅安 w ramach kursu Umiejętności Jutra, postanowiłem pójść o krok dalej i stworzyć własne narzędzie.</p>\n        <p>Wierzę, że AI może realnie wspierać nas w codziennym rozwoju i refleksji nad sobą.</p>\n        <p>Tak powstał projekt <strong>AI Journal</strong> – proste narzędzie do prowadzenia dziennika z pomocą sztucznej inteligencji, które w pełni realizuje tę ideę.</p>\n        \n        <img src=\"assets/blog/ai-journal.webp\" alt=\"AI Journal Meme: Ja prowadzący dziennik vs AI Journal\" class=\"img-fluid my-4 rounded\">\n\n        <h4>🧠 Jak działa AI Journal?</h4>\n        <p>AI Journal to intuicyjna aplikacja działająca jak chat. W tym interfejsie możesz codziennie zapisywać swoje przemyślenia, cele, trudności czy wątpliwości.</p>\n        \n        <p>Wsparcie AI polega na tym, że:</p>\n        <ul>\n            <li>pomaga w głębszej refleksji,</li>\n            <li>zadaje trafne pytania, które prowadzą do ciekawszych wniosków,</li>\n            <li>automatycznie generuje miesięczne podsumowania (ta funkcja jest jeszcze w fazie testów!).</li>\n        </ul>\n        \n        <p>Obecnie intensywnie testuję rozwiązanie, by sprawdzić jego realną użyteczność. W kolejnych tygodniach będę dzielić się postępami i wnioskami z testów!</p>\n        \n        <h4>💡 Dla programistów:</h4>\n        <p>Ponieważ to projekt open source, cały kod jest dostępny na GitHubie. Jeśli ciekawi Cię, jak to działa od środka – zapraszam!</p>\n        \n        <p>👉 <a href=\"https://lnkd.in/d3d-_VYJ\" target=\"_blank\">https://lnkd.in/d3d-_VYJ</a></p>\n        \n        <p>Zostaw ⭐, jeśli doceniasz pomysł, albo podziel się w komentarzu, jak Ty wykorzystujesz AI w swoich niszowych projektach!</p>"
  },
  {
    "slug": "maly-skrypt-duza-roznica-ctrl-q-autokorekta",
    "title": "🚀 Mały skrypt, duża różnica! (CTRL+Q Autokorekta)",
    "excerpt": "Ostatnio stworzyłem prosty skrypt, który pozwala jednym skrótem klawiszowym (CTRL+Q) poprawiać literówki w zaznaczonym tekście – nie zmieniając przy tym słów. Idealny dla osób z dysleksją lub tych, którzy często robią literówki.",
    "publishedAt": "2026-01-17",
    "originalDate": "January 17, 2026",
    "category": "Python",
    "tags": [
      "Python",
      "Scripting",
      "Produktywność",
      "Gemini",
      "Google",
      "OpenSource",
      "Programowanie"
    ],
    "image": "assets/blog/ctrl-q-typo-fix.webp",
    "imageAlt": "🚀 Mały skrypt, duża różnica! (CTRL+Q Autokorekta)",
    "sourceUrl": "https://tomaszjader.com/blog/maly-skrypt-duza-roznica-ctrl-q-autokorekta",
    "wordCount": 87,
    "readingMinutes": 1,
    "contentHtml": "<p>🚀 Mały skrypt, duża różnica!</p>\n        \n        <p>Ostatnio stworzyłem prosty skrypt, który pozwala jednym skrótem klawiszowym (CTRL+Q) poprawiać literówki w zaznaczonym tekście – nie zmieniając przy tym słów. Idealny dla osób z dysleksją lub tych, którzy często robią literówki.</p>\n        \n        <p>Działa w języku polskim i angielskim, a wszystko, czego potrzebujesz, to darmowy dostęp do Gemini od Google. Żadnych kosztów, a oszczędza mnóstwo czasu przy codziennym pisaniu.</p>\n        \n        <img src=\"assets/blog/ctrl-q-typo-fix.webp\" alt=\"Before vs After Typon Fix - CTRL+Q\" class=\"img-fluid my-4 rounded\">\n\n        <p>📂 Kod udostępniłem na GitHubie, więc każdy może wypróbować: <a href=\"https://lnkd.in/d-vvM9nY\" target=\"_blank\">https://lnkd.in/d-vvM9nY</a></p>\n        \n        <p>Czasem najprostsze narzędzia okazują się najbardziej przydatne – zaznacz tekst, naciśnij CTRL+Q i gotowe!</p>"
  },
  {
    "slug": "szeptucha-notatki-glosowe-whisper",
    "title": "\"Szeptucha\": Jak stworzyłem własne narzędzie do notatek głosowych z transkrypcją oparte na Whisper (i dlaczego to się opłaca)",
    "excerpt": "Z przyjemnością prezentuję projekt, który narodził się z frustracji i potrzeby. Nazwałem go Szeptucha. Inspiracją był post Jakuba Mrugalskiego, opisujący niedoskonałości domyślnie wbudowanych systemów do tworzenia notatek głosowych.",
    "publishedAt": "2026-01-17",
    "originalDate": "January 17, 2026",
    "category": "Programowanie",
    "tags": [
      "Programowanie",
      "OpenAI",
      "Whisper",
      "AI",
      "Produktywność",
      "Narzędzia",
      "Developer",
      "VibeKodowania"
    ],
    "image": "assets/blog/szeptucha-whisper.webp",
    "imageAlt": "\"Szeptucha\": Jak stworzyłem własne narzędzie do notatek głosowych z transkrypcją oparte na Whisper (i dlaczego to się opłaca)",
    "sourceUrl": "https://tomaszjader.com/blog/szeptucha-notatki-glosowe-whisper",
    "wordCount": 166,
    "readingMinutes": 1,
    "contentHtml": "<p>Z przyjemnością prezentuję projekt, który narodził się z frustracji i potrzeby. Nazwałem go Szeptucha.</p>\n        \n        <p>Inspiracją był post 🔥 Jakub Mrugalski, opisujący niedoskonałości domyślnie wbudowanych systemów do tworzenia notatek głosowych. Mowa tu o systemowym narzędziu Text To Speech w Windowsie, które nie działało do końca tak, jakbym tego oczekiwał.</p>\n        \n        <p>Postanowiłem stworzyć własne, skuteczne i ekonomiczne rozwiązanie: prosty program, który za pomocą skrótu klawiszowego automatycznie uruchamia transkrypcję mowy na tekst.</p>\n        \n        <img src=\"assets/blog/szeptucha-whisper.webp\" alt=\"Meme: Używanie wbudowanej funkcji Text To Speech w Windowsie vs Zbudowanie własnej 'Szeptuchy'\" class=\"img-fluid my-4 rounded\">\n\n        <h4>W projekcie wykorzystałem płatną wersję modelu Whisper od OpenAI.</h4>\n        \n        <p>Główną motywacją było obniżenie kosztów. Analizując ceny komercyjnych rozwiązań, szybko zdałem sobie sprawę, że przy moim regularnym (choć nie intensywnym) użytkowaniu, musiałbym przejść na płatne plany, co byłoby nieuzasadnione ekonomicznie. Stworzenie własnego narzędzia okazało się dużo szybsze i w dłuższej perspektywie znacznie tańsze w eksploatacji. Udało mi się go w pełni zrealizować w tym stylu.</p>\n        \n        <p><strong>Ciekawostka:</strong> Cały ten post, po niezbędnych korektach, został wstępnie podyktowany i przetranskrybowany właśnie za pomocą Szeptuchy.</p>\n        \n        <p>Co Wy myślicie o tworzeniu własnych narzędzi zamiast korzystania z gotowych, ale drogich subskrypcji? Dajcie znać w komentarzu!</p>"
  },
  {
    "slug": "poranny-automat-raportowy-switomir",
    "title": "Jak przerobiłem asystenta pogodowego na \"Świtomira\" – Asystenta Poranka",
    "excerpt": "Zastanawiałem się, jak rozwinąć swój projekt w n8n, by stworzyć spersonalizowany i w pełni automatyczny poranny raport. Oto jak powstał \"Świtomir\" – mój Asystent Poranka!",
    "publishedAt": "2026-01-16",
    "originalDate": "January 16, 2026",
    "category": "n8n",
    "tags": [
      "n8n",
      "Automatyzacja",
      "Workflow",
      "LowCode",
      "Produktywność",
      "OpenAI",
      "Programowanie"
    ],
    "image": "assets/blog/switomir-n8n.webp",
    "imageAlt": "Jak przerobiłem asystenta pogodowego na \"Świtomira\" – Asystenta Poranka",
    "sourceUrl": "https://tomaszjader.com/blog/poranny-automat-raportowy-switomir",
    "wordCount": 204,
    "readingMinutes": 2,
    "contentHtml": "<p>Zastanawiałem się, jak rozwinąć swój projekt w n8n, by stworzyć spersonalizowany i w pełni automatyczny poranny raport. Oto jak powstał \"Świtomir\" – mój Asystent Poranka!</p>\n\n        <h4>🗓️ Poranny Automat Raportowy – n8n Workflow</h4>\n        <p>Ten workflow w n8n automatycznie wysyła codzienne poranne raporty prosto na Telegram. Zbiera dane z kilku źródeł, generuje czytelny podsumowujący komunikat i wysyła go o stałej godzinie. Pełna automatyzacja porannej rutyny!</p>\n        \n        <h4>🔧 Co robi workflow?</h4>\n        <ul>\n            <li>⏰ <strong>Uruchamia się codziennie o 07:07</strong> dzięki Schedule Trigger.</li>\n            <li>🤖 <strong>Pobiera żart z OpenAI.</strong></li>\n            <li>📅 <strong>Pobiera dzisiejsze wydarzenia z Google Calendar.</strong></li>\n            <li>⛅ <strong>Pobiera bieżącą pogodę z OpenWeatherMap.</strong></li>\n            <li>📝 <strong>Pobiera zadania z Google Tasks.</strong></li>\n            <li>🗃 <strong>Łączy dane z DataTable</strong> (ID czatu Telegram).</li>\n            <li>🧩 <strong>Składa wszystko w raport</strong> w kodzie JavaScript.</li>\n            <li>📤 <strong>Wysyła wiadomość na Telegram</strong> w formacie Markdown.</li>\n        </ul>\n        \n        <h4>📄 Co znajduje się w raporcie?</h4>\n        <ul>\n            <li>Pogoda dla wskazanego miasta (Temperatura, odczuwalna, ciśnienie, wiatr).</li>\n            <li>Lista wydarzeń z kalendarza (z godzinami).</li>\n            <li>Lista zadań do wykonania.</li>\n            <li>\"Żart dnia\" prosto z AI.</li>\n        </ul>\n        \n        <h4>🎯 Cel:</h4>\n        <p>Jeden, spersonalizowany raport, codziennie, bez żadnej interakcji. Oczywiście, nie obyło się bez wpadki! Pierwszego dnia podczas testów obudziłem się bez powiadomienia. Okazało się, że popełniłem trywialny błąd w workflow. Taki to już jest n8n, man! 😉</p>\n        \n        <img src=\"assets/blog/switomir-n8n.webp\" alt=\"Świtomir n8n workflow\" class=\"img-fluid my-4 rounded\">\n        \n        <p>A Ty, co ostatnio zautomatyzowałeś w n8n? Podziel się swoim projektem w komentarzu!</p>"
  },
  {
    "slug": "second-brain-n8n-ai-agent",
    "title": "Jak połączyć Second Brain z N8N i AI, by stworzyć Osobistego Agenta do Burzy Mózgów?",
    "excerpt": "Ostatnio zainspirował mnie Second Brain, czyli idea Drugiego Mózgu. Zamiast budować kolejny system do notatek, pomyślałem: dlaczego by nie dać „pamięci” mojemu agentowi do automatyzacji w N8N?",
    "publishedAt": "2026-01-15",
    "originalDate": "January 15, 2026",
    "category": "SecondBrain",
    "tags": [
      "SecondBrain",
      "Automatyzacja",
      "N8N",
      "AI",
      "Produktywność",
      "LowCode",
      "GoogleDocs",
      "ContentMarketing"
    ],
    "image": "assets/blog/second-brain-n8n.webp",
    "imageAlt": "Jak połączyć Second Brain z N8N i AI, by stworzyć Osobistego Agenta do Burzy Mózgów?",
    "sourceUrl": "https://tomaszjader.com/blog/second-brain-n8n-ai-agent",
    "wordCount": 196,
    "readingMinutes": 1,
    "contentHtml": "<p>Ostatnio zainspirował mnie Second Brain, czyli idea Drugiego Mózgu, prezentowana na wydarzeniu Mindstone prowadzonym przez Kamila Dąbrowska. Zamiast budować kolejny system do notatek, pomyślałem: dlaczego by nie dać „pamięci” mojemu agentowi do automatyzacji w N8N?</p>\n        \n        <p>Efekt? Stworzyłem osobistego asystenta do burzy mózgów, który faktycznie zna moje cele, priorytety i tożsamość. To krok dalej niż zwykłe promptowanie.</p>\n        \n        <img src=\"assets/blog/second-brain-n8n.webp\" alt=\"Meme: Agent AI używa Twoich celów z Second Brain\" class=\"img-fluid my-4 rounded\">\n        \n        <h4>Architektura pamięci dla Agenta</h4>\n        <p>Aby agent AI mógł prowadzić ze mną merytoryczne dyskusje i proponować trafne rozwiązania, musiałem wyposażyć go w kontekst.</p>\n        \n        <p>Oto kluczowe elementy tej implementacji:</p>\n        <ul>\n            <li><strong>Agent w N8N:</strong> Wykorzystanie standardowego środowiska automatyzacji do zarządzania logiką.</li>\n            <li><strong>Baza Danych:</strong> Dwa arkusze Google Docs przechowujące zbiór danych na mój temat: od najważniejszych celów, przez opis mojej roli, aż po kluczowe projekty.</li>\n            <li><strong>Serwer MCP:</strong> Służy jako mechanizm łączący agenta z dynamicznymi danymi.</li>\n            <li><strong>Dynamiczna Aktualizacja:</strong> Możliwość szybkiego dodawania i aktualizowania tych danych (np. zmiana celu) bezpośrednio z poziomu serwera.</li>\n        </ul>\n        \n        <p>Cała konfiguracja pozwala agentowi na błyskawiczne odniesienie się do moich danych, dzięki czemu burza mózgów jest precyzyjna, a propozycje — zawsze zgodne z moimi priorytetami.</p>\n        \n        <h4>🔥 Pora na eksperymenty!</h4>\n        <p>Czy macie doświadczenia z łączeniem narzędzi do automatyzacji z koncepcjami zarządzania wiedzą, takimi jak Second Brain?</p>\n        <p>Podzielcie się w komentarzu swoimi pomysłami lub pytaniami technicznymi!</p>"
  },
  {
    "slug": "paradoks-produktywnosci-weekend-planner",
    "title": "Paradoks produktywności: Dlaczego im więcej mamy czasu, tym trudniej go sensownie wykorzystać?",
    "excerpt": "Zauważyłem u siebie dziwną zależność – jestem najbardziej zdyscyplinowany, gdy mój kalendarz pęka w szwach. Gdy przychodzi wolny weekend, często dopada mnie paraliż decyzyjny i czas „przecieka mi przez palce”.",
    "publishedAt": "2026-01-14",
    "originalDate": "January 14, 2026",
    "category": "Automatyzacja",
    "tags": [
      "Automatyzacja",
      "n8n",
      "OpenAI",
      "Productivity",
      "BuildInPublic",
      "NoCode",
      "TechCommunity",
      "Innovation"
    ],
    "image": "assets/blog/mem2.webp",
    "imageAlt": "Paradoks produktywności: Dlaczego im więcej mamy czasu, tym trudniej go sensownie wykorzystać?",
    "sourceUrl": "https://tomaszjader.com/blog/paradoks-produktywnosci-weekend-planner",
    "wordCount": 213,
    "readingMinutes": 2,
    "contentHtml": "<p>Zauważyłem u siebie dziwną zależność – jestem najbardziej zdyscyplinowany, gdy mój kalendarz pęka w szwach. Gdy przychodzi wolny weekend, często dopada mnie paraliż decyzyjny i czas „przecieka mi przez palce”.</p>\n        \n        <p>Zamiast z tym walczyć, postanowiłem to zautomatyzować. 🤖</p>\n        \n        <img src=\"assets/blog/mem2.webp\" alt=\"Meme: Ja buduję system n8n żeby zaplanować spacer\" class=\"img-fluid my-4 rounded\">\n\n        <p>Stworzyłem <strong>Weekend Planner</strong> – osobistego asystenta, który dba o to, bym wycisnął z wolnego czasu to, co najlepsze, bez marnowania godziny na zastanawianie się „co by tu dzisiaj zrobić”.</p>\n        \n        <h4>Jak to działa od strony technicznej?</h4>\n        <p>System opiera się na prostym, ale skutecznym workflow:</p>\n        \n        <ul>\n            <li><strong>1️⃣ Baza danych (Google Sheets):</strong> Dwie listy – miejsca, które chcę odwiedzić (backlog marzeń) oraz aktywności cykliczne/sportowe.</li>\n            <li><strong>2️⃣ Logika (n8n):</strong> Serce systemu. Workflow pobiera dane z arkuszy i analizuje dostępne opcje.</li>\n            <li><strong>3️⃣ Mózg (OpenAI API):</strong> Model analizuje moje preferencje i generuje spójny, atrakcyjny plan na nadchodzący weekend.</li>\n            <li><strong>4️⃣ Interfejs (Telegram):</strong> Bot wysyła mi gotową propozycję.</li>\n        </ul>\n        \n        <p>Klikam „Akceptuję” ✅ -> plan ląduje w kalendarzu.<br>\n        Klikam „Generuj nowy” 🔄 -> n8n prosi AI o inną konfigurację.</p>\n        \n        <h4>Dlaczego n8n, a nie gotowa aplikacja?</h4>\n        <p>Bo daje pełną kontrolę nad logiką i pozwala na łatwą rozbudowę (np. o prognozę pogody czy rezerwację biletów przez API). To klasyczny przykład tego, jak narzędzia low-code i AI mogą rozwiązywać realne, codzienne problemy.</p>\n        \n        <p>Ciekaw jestem Waszego podejścia – automatyzujecie takie „życiowe” procesy, czy w weekendy wolicie całkowity analog i spontan? 👇</p>"
  },
  {
    "slug": "czysty-kod-to-tylko-polowa-sukcesu",
    "title": "Czysty kod to tylko połowa sukcesu. Prawdziwą wartością jest umiejętność dzielenia się wiedzą.",
    "excerpt": "Kontynuując rozwój mojej strony-portfolio, zdecydowałem się na wdrożenie sekcji blogowej. Moim celem jest nie tylko prezentacja gotowych projektów, ale przede wszystkim dokumentowanie procesu ich powstawania.",
    "publishedAt": "2026-01-13",
    "originalDate": "January 13, 2026",
    "category": "Angular",
    "tags": [
      "Angular",
      "TypeScript",
      "WebDevelopment",
      "Frontend",
      "Programming",
      "PersonalBrand",
      "Portfolio",
      "OpenSource"
    ],
    "image": "assets/blog/mem1.webp",
    "imageAlt": "Czysty kod to tylko połowa sukcesu. Prawdziwą wartością jest umiejętność dzielenia się wiedzą.",
    "sourceUrl": "https://tomaszjader.com/blog/czysty-kod-to-tylko-polowa-sukcesu",
    "wordCount": 136,
    "readingMinutes": 1,
    "contentHtml": "<p>Kontynuując rozwój mojej strony-portfolio, zdecydowałem się na wdrożenie sekcji blogowej. Moim celem jest nie tylko prezentacja gotowych projektów, ale przede wszystkim dokumentowanie procesu ich powstawania i pogłębianie technicznych detali.</p>\n        \n        <p>Co udało mi się zaimplementować?</p>\n        \n        <h4>Architektura:</h4>\n        <p>Projekt oparty na Angularze i TypeScript, wykorzystujący arkusze stylów SCSS.</p>\n        \n        <h4>Zarządzanie treścią:</h4>\n        <p>Posty przechowywane są w czystym formacie JSON. To proste, ale skuteczne rozwiązanie pozwoliło mi na łatwe wdrożenie pełnej wielojęzyczności strony.</p>\n        \n        <h4>User Experience:</h4>\n        <p>Dodałem funkcję wyszukiwania oraz dynamicznego filtrowania postów po tagach.</p>\n        \n        <img src=\"assets/blog/mem1.webp\" alt=\"Meme: Kiedy w końcu zaimplementujesz wielojęzyczność i wyszukiwanie\" class=\"img-fluid my-4 rounded\">\n\n        <p>Obecnie pracuję nad uzupełnieniem bazy wpisów. Docelowo każdy projekt otrzyma rozbudowany opis, merytoryczne wnioski oraz bezpośrednie odnośniki do repozytoriów na GitHubie.</p>\n        \n        <p>Wierzę, że transparentność w pokazywaniu „kuchni” programisty to najlepszy sposób na budowanie zaufania i wymianę doświadczeń z community.</p>\n        \n        <p>Jakie sekcje w portfolio dewelopera uważacie za najbardziej wartościowe z perspektywy rekrutacji i biznesu? Dajcie znać w komentarzach! 👇</p>"
  },
  {
    "slug": "jak-przestalem-oszukiwac-samego-siebie-w-nauce-angielskiego",
    "title": "Jak przestałem oszukiwać samego siebie w nauce angielskiego? (Automatyzacja nawyków)",
    "excerpt": "Przez długi czas zmagałem się z jednym problemem: jak utrzymać nawyk nauki, gdy wieczorem brakuje już sił? Postanowiłem to zmienić, wykorzystując n8n.",
    "publishedAt": "2026-01-07",
    "originalDate": "January 7, 2026",
    "category": "Automatyzacja",
    "tags": [
      "Automatyzacja",
      "n8n",
      "Productivity",
      "English Learning"
    ],
    "image": "assets/blog/n8n-meme.webp",
    "imageAlt": "Jak przestałem oszukiwać samego siebie w nauce angielskiego? (Automatyzacja nawyków)",
    "sourceUrl": "https://tomaszjader.com/blog/jak-przestalem-oszukiwac-samego-siebie-w-nauce-angielskiego",
    "wordCount": 192,
    "readingMinutes": 1,
    "contentHtml": "<p>Przez długi czas zmagałem się z jednym problemem: jak utrzymać nawyk nauki, gdy wieczorem brakuje już sił?</p>\n        <p>Moje trzy filary – słuchanie, mówienie i powtórki w Anki – często lądowały na samym końcu listy \"to-do\". Robiłem je tuż przed snem, byle tylko odhaczyć punkt w kalendarzu. Efekt? Mała skuteczność i poczucie winy.</p>\n        <p>Postanowiłem to zmienić, wykorzystując n8n.</p>\n        \n        <img src=\"assets/blog/n8n-meme.webp\" alt=\"Meme: Ja myślący że mam ochotę na angielski vs mój workflow w n8n\" class=\"img-fluid my-4 rounded\">\n\n        <p>Zamiast polegać na silnej woli, stworzyłem automatycznego asystenta na Telegramie, który dostarcza mi konkretne zadania w idealnych momentach dnia:</p>\n        \n        <h4>🚀 Mój codzienny workflow:</h4>\n        <ul>\n          <li><strong>07:30 (Pasywne słuchanie):</strong> Dostaję bezpośredni link do najnowszego podcastu BBC Learning English. Idealne do kawy.</li>\n          <li><strong>08:30 (Aktywne powtarzanie):</strong> Przypomnienie o sesji w AnkiDroid. Zanim wejdę w wir pracy.</li>\n          <li><strong>20:00 (Konwersacje):</strong> Zaproszenie do rozmowy z Google Gemini. Przełamuję barierę językową w bezpiecznym środowisku AI.</li>\n        </ul>\n        \n        <h4>Dlaczego to działa?</h4>\n        <p>Zasada jest prosta: im mniejszy opór przed wykonaniem zadania, tym łatwiej przy nim wytrwać. Dzięki automatyzacji nie szukam materiałów – one same znajdują mnie.</p>\n        \n        <h4>Technicznie:</h4>\n        <p>Wykorzystałem Schedule Triggers, n8n DataTables do zarządzania bazą i Telegram Node do wysyłki sformatowanych powiadomień HTML. Proste, a skuteczne.</p>\n        \n        <p>A Ty jak radzisz sobie z regularnością? Ufasz swojej pamięci czy wspierasz się technologią?</p>\n        \n        <p>#Automatyzacja #n8n #Productivity #NaukaAngielskiego #EnglishLearning #LowCode #HabitBuilding #PersonalDevelopment</p>"
  },
  {
    "slug": "moje-hobby-podsumowanie-roku",
    "title": "Nigdy nie sądziłem, że moje hobby doprowadzi mnie do tego miejsca. 🚀",
    "excerpt": "Dziś nietypowo, bo czas na krótkie podsumowanie roku. Rok temu zacząłem dzielić się swoimi perypetiami przy hobbystycznych projektach. Efekt? Ponad 100 000 wyświetleń.",
    "publishedAt": "2026-01-04",
    "originalDate": "January 4, 2026",
    "category": "Podsumowanie",
    "tags": [
      "Podsumowanie",
      "Hobby",
      "Projekty",
      "Rozwój",
      "Community",
      "Mikroinfluencer"
    ],
    "image": "assets/blog/results.webp",
    "imageAlt": "Nigdy nie sądziłem, że moje hobby doprowadzi mnie do tego miejsca. 🚀",
    "sourceUrl": "https://tomaszjader.com/blog/moje-hobby-podsumowanie-roku",
    "wordCount": 82,
    "readingMinutes": 1,
    "contentHtml": "<p>Dziś nietypowo, bo czas na krótkie podsumowanie roku. Rok temu zacząłem dzielić się swoimi perypetiami przy hobbystycznych projektach.</p>\n        \n        <p>Efekt?</p>\n        \n        <img src=\"assets/blog/results.webp\" alt=\"Statystyki podsumowujące rok\" class=\"img-fluid my-4 rounded\">\n\n        <ul>\n          <li>Ponad 100 000 wyświetleń.</li>\n          <li>Dotarcie do 17 000 unikalnych odbiorców.</li>\n          <li>Status mikroinfluencera, o którym nawet nie marzyłem.</li>\n        </ul>\n\n        <p>To dowód na to, że warto dzielić się swoją pasją, nawet jeśli wydaje nam się, że \"to tylko małe projekty\". Każda historia ma swojego odbiorcę.</p>\n        \n        <p>Dziękuję, że jesteście częścią tej podróży! A Ty? Jaki był Twój najważniejszy projekt w zeszłym roku? Podziel się w komentarzu! 👇</p>"
  }
];

export const blogPostSlugs = blogPosts.map((post) => post.slug);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
