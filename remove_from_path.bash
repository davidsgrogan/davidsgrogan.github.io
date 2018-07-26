function remove_from_path {
  IFS=":"
  t=($PATH)
  unset IFS
  t=(${t[@]%%*$1*})
  IFS=":"
  str="${t[*]}"
  unset IFS
  export PATH=$str
}

