import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder input = new StringBuilder();
        String line;
        while ((line = br.readLine()) != null) {
            if (!line.isEmpty()) input.append(line).append(' ');
        }
        StringTokenizer st = new StringTokenizer(input.toString());
        if (!st.hasMoreTokens()) return;
        int T = Integer.parseInt(st.nextToken());
        StringBuilder out = new StringBuilder();
        for (int t = 0; t < T; t++) {
            String s = st.nextToken();
            int sum = 0;
            for (int i = 0; i < s.length(); i++) {
                char c = s.charAt(i);
                if (c == '2' || c == '3' || c == '5' || c == '7') sum += c - '0';
            }
            out.append(sum);
            if (t < T - 1) out.append('\n');
        }
        System.out.print(out.toString());
    }
}
