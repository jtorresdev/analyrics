import lyricsgenius
import sys

genius = lyricsgenius.Genius("qy6lSZRnHhIDfQ-M2A8T1zCEt84uzBwm4ieX2QzIferlY6FsiU3soeISDvAA5jaR")
song = genius.search_song(sys.argv[1], sys.argv[2])
print(song.lyrics)