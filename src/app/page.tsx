import {
  AlignJustify,
  ArrowRight,
  Library,
  ListMusic,
  Maximize2,
  MicVocalIcon,
  MonitorSpeaker,
  Plus,
  ScreenShare,
  Search,
  SquarePlay,
  Volume1,
} from "lucide-react";
import Button from "./components/Button";
import DailyMixPreview from "./components/DailyMixPreview";
import PlaylistPreviewItemList from "./components/PlaylistPreviewItemList";
import Player from "./components/Player";
import MusicPreviewFooter from "./components/MusicPreviewFooter";
import RecentlyPlayedPreview from "./components/RecentlyPlayedPreview";
import RecentlyPlayedPreviewTop from "./components/RecentlyPlayedPreviewTop";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex flex-1">
        <div className="flex flex-col">
          <aside className="flex-1 w-60 sm:w-80 lg:w-96 bg-zinc-900 rounded-lg ml-2 mt-2 px-6 transition-all duration-300">
            <nav>
              <div className="flex justify-between py-3 items-center">
                <div className="flex gap-2 items-center">
                  <button>
                    <Library className="text-zinc-50/70" size={25} />
                  </button>
                  <h1 className="text-sm text-zinc-50/70">Sua Biblioteca</h1>
                </div>
                <div className="space-x-3 items">
                  <button>
                    <Plus size={24} className="text-zinc-50/70" />
                  </button>
                  <button>
                    <ArrowRight size={24} className="text-zinc-50/70" />
                  </button>
                </div>
              </div>

              {/* Botões */}
              <div className="flex gap-3 mt-1 overflow-x-hidden">
                <Button text="Playlists" />
                <Button text="Podcasts" />
                <Button text="Álbuns" />
                <Button text="Artistas" />
              </div>
              <div className="flex justify-between mt-6">
                <button>
                  <Search size={20} className="text-zinc-50/80" />
                </button>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-zinc-400">Recentes</span>
                  <button>
                    <AlignJustify size={20} className="text-zinc-50/80" />
                  </button>
                </div>
              </div>

              <PlaylistPreviewItemList
                title="Título da playlist #1"
                author="user"
                albumCover="/album.jpg"
              />

              <PlaylistPreviewItemList
                title="Título da playlist #2"
                author="user"
                albumCover="/album2.jpg"
              />

              <PlaylistPreviewItemList
                title="Título da playlist #3"
                author="user"
                albumCover="/album3.jpg"
              />

              <PlaylistPreviewItemList
                title="Título da playlist #4"
                author="user"
                albumCover="/album4.jpg"
              />

              <PlaylistPreviewItemList
                title="Título da playlist #4"
                author="user"
                albumCover="/album5.jpg"
              />
            </nav>
          </aside>
        </div>

        <main className="flex-1 bg-zinc-900 rounded-lg ml-2 mt-2 px-6 py-3 pl-6">
          <div className="flex gap-3 mt-1">
            <Button text="Tudo" />
            <Button text="Músicas" />
            <Button text="Podcasts" />
          </div>

          {/* Card Playlists */}
          <div className="mt-4 flex gap-3 flex-wrap">
            <RecentlyPlayedPreviewTop albumCover="/album.jpg" />
            <RecentlyPlayedPreviewTop albumCover="/album2.jpg" />
            <RecentlyPlayedPreviewTop albumCover="/album3.jpg" />
            <RecentlyPlayedPreviewTop albumCover="/album4.jpg" />
            <RecentlyPlayedPreviewTop albumCover="/album6.jpg" />
            <RecentlyPlayedPreviewTop albumCover="/album7.jpg" />
            <RecentlyPlayedPreviewTop albumCover="/album8.jpg" />
          </div>

          <h2 className="mt-9 text-white font-bold text-xl md:text-2xl">
            Feito para #User
          </h2>

          <div className="flex gap-6 mt-4 overflow-x-hidden">
            <DailyMixPreview
              artistList="Artista 1, Artista 2, Artista 3"
              albumCover="/album.jpg"
            />
            <DailyMixPreview
              artistList="Artista 1, Artista 2, Artista 3, Artista 4, Artista 5"
              albumCover="/album2.jpg"
            />
            <DailyMixPreview
              artistList="Artista 1, Artista 2, Artista 3"
              albumCover="/album3.jpg"
            />
            <DailyMixPreview
              artistList="Artista 1, Artista 2, Artista 3"
              albumCover="/album4.jpg"
            />
            <DailyMixPreview
              artistList="Artista 1, Artista 2, Artista 3"
              albumCover="/album5.jpg"
            />
            <DailyMixPreview
              artistList="Artista 1, Artista 2, Artista 3"
              albumCover="/album6.jpg"
            />
          </div>

          <h2 className="mt-9 text-white font-bold text-xl md:text-2xl">
            Tocados recentemente
          </h2>

          <div className="flex gap-6 mt-4">
            <RecentlyPlayedPreview
              artistList="Artista 1, Artista 2, Artista 3"
              albumCover="/album.jpg"
            />
            <RecentlyPlayedPreview
              artistList="Artista 1, Artista 2, Artista 3, Artista 4,"
              albumCover="/album2.jpg"
            />
          </div>
        </main>
      </div>
      <footer className="bg-black p">
        <div className="flex gap-3 items-center justify-between px-6 py-3">
          <MusicPreviewFooter />
          <Player />

          <div className="flex gap-3">
            <button className="hover:scale-110">
              <SquarePlay size={20} />
            </button>
            <button className="hover:scale-110">
              <MicVocalIcon size={20} />
            </button>
            <button className="hover:scale-110">
              <ListMusic size={20} />
            </button>
            <button className="hover:scale-110">
              <MonitorSpeaker size={20} />
            </button>
            <button className="hover:scale-110">
              <Volume1 size={20} />
            </button>
            <button className="hover:scale-110">
              <ScreenShare size={20} />
            </button>
            <button className="hover:scale-110">
              <Maximize2 size={20} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
